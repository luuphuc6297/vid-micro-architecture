import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as Dto from './dto';
import { ProjectEntity } from './project.entity';
@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(ProjectEntity)
        private projectRepository: Repository<ProjectEntity>
    ) {}

    private readonly logger = new Logger(ProjectService.name);

    getHello(): string {
        return 'Hello World!';
    }

    bill(data: any) {
        this.logger.log('Project...', data);
    }

    findAll(): Promise<ProjectEntity[]> {
        return this.projectRepository.find();
    }

    async create(data: Dto.CreateProjectRequest) {
        return this.projectRepository.create(data).save();
    }
}
