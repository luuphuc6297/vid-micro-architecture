export enum FileType {
    avatar = 'avatar',
    image = 'image',
    video = 'video',
    pdf = 'pdf',
}

export enum EUserStatus {
    pending = 'pending',
    newbie = 'newbie',
    active = 'active',
    inactive = 'inactive',
}

export type NumberOrString = string | number;

export type IService = 'sso';

export interface IServiceParams {
    service: IService;
}

export interface ISignedUrl {
    id: NumberOrString;
    idWithExtension: string;
    name: string;
    type: string;
    mimeType: string;
    extension?: string;
    path: string;
    pipeFrom: string;
    presignedUrl?: string;
    fileUrl: string;
}

export enum EVerificationStatus {
    pending = 'pending',
    success = 'success',
    disable = 'disable',
}
export enum EVerificationType {
    register = 'register',
    login = 'login',
}
