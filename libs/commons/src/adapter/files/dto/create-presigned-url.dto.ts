import { IServiceParams } from 'src/interfaces';

export class CreatePresignedUrlDto {
  fileName: string;
  params: IServiceParams;
}
