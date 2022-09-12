import { AuthModule, RmqModule } from '@app/commons';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

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
    ],
    controllers: [ProjectController],
    providers: [ProjectService],
})
export class ProjectModule {}
