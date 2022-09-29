import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as Dto from './dto';
import { Project } from './project.entity';
@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>
    ) {}

    private readonly logger = new Logger(ProjectService.name);

    getHello(): string {
        return 'Hello World!';
    }

    bill(data: any) {
        this.logger.log('Project...', data);
    }

    findAll(): Promise<Project[]> {
        return this.projectRepository.find();
    }

    async create(data: Dto.CreateProjectRequest) {
        return this.projectRepository.create(data).save();
    }
}
