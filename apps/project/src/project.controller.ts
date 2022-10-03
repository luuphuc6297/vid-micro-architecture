import { JwtAuthGuard, RmqService } from '@app/commons';
import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService, private readonly rmqService: RmqService) {}

    @Get()
    getHello(): string {
        return this.projectService.getHello();
    }

    // @EventPattern('project_created')
    // @UseGuards(JwtAuthGuard)
    // async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    //     this.projectService.bill(data);
    //     this.rmqService.ack(context);
    // }

    @EventPattern('project_created')
    @Post()
    async handleProjectCreated(@Payload() data: any, @Ctx() context: RmqContext) {
        this.projectService.create(data);
        this.rmqService.ack(context);
    }
}
