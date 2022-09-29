import { IsNotEmpty } from 'class-validator';

export class CreateProjectRequest {
    @IsNotEmpty()
    name: string;
}
