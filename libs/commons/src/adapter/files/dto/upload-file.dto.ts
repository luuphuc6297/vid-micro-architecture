export class UploadFileDto {
  presignedUrl: string;
  buffer: Buffer;
  mimeType: string;
}
