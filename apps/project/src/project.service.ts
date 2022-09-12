import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ProjectService {
    private readonly logger = new Logger(ProjectService.name);
    getHello(): string {
        return 'Hello World!';
    }

    bill(data: any) {
        this.logger.log('Project...', data);
    }
}
