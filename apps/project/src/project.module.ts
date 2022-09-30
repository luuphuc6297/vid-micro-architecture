import { AuthModule, RmqModule } from '@app/commons';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './project.controller';
import { Project } from './project.entity';
import { ProjectService } from './project.service';
import * as Joi from 'joi';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                RABBIT_MQ_URI: Joi.string().required(),
                RABBIT_MQ_PROJECT_QUEUE: Joi.string().required(),
            }),
        }),
        RmqModule,
        AuthModule,
        TypeOrmModule.forFeature([Project]),
    ],
    controllers: [ProjectController],
    providers: [ProjectService],
})
export class ProjectModule {}
