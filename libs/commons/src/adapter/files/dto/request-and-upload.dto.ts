import { IServiceParams } from 'src/interfaces';

export class RequestAndUploadDto {
  fileName: string;
  params: IServiceParams
  buffer: Buffer
  mimeType: string
}