import { HttpService, Injectable } from '@nestjs/common';
import config from '../../configs';
import { ISignedUrl } from '../../interfaces';
import * as Dto from './dto';

@Injectable()
export class FilesAdapter {
    constructor(private httpService: HttpService) {}

    async createPresignedUrl(data: Dto.CreatePresignedUrlDto) {
        const { fileName, params } = data;
        return this.httpService
            .request({
                url: `${config.FILE_HOST}/api/assets/presigned-url`,
                method: 'POST',
                data: {
                    name: fileName,
                },
                params,
            })
            .toPromise()
            .then((res) => {
                return res.data as ISignedUrl;
            });
    }

    async uploadFile(data: Dto.UploadFileDto) {
        const { presignedUrl, buffer, mimeType } = data;
        return this.httpService
            .request({
                url: presignedUrl,
                method: 'PUT',
                data: buffer,
                headers: {
                    'Content-Type': mimeType,
                    'x-amz-acl': 'public-read',
                },
                maxBodyLength: Infinity,
                maxContentLength: Infinity,
            })
            .toPromise()
            .then((res) => {
                return res.data;
            });
    }

    async requestAndUpload(data: Dto.RequestAndUploadDto): Promise<string> {
        const { fileName, params, buffer, mimeType } = data;
        const presignedRes = await this.createPresignedUrl({ fileName, params });

        return this.uploadFile({
            presignedUrl: presignedRes.presignedUrl,
            buffer,
            mimeType,
        }).then(() => {
            return presignedRes.fileUrl;
        });
    }

    async findFileById(fileId: string) {
        return this.httpService
            .request({
                url: `${config.FILE_HOST}/api/assets/${fileId}/info`,
                method: 'GET',
            })
            .toPromise()
            .then((res) => {
                return res.data;
            });
    }
}
