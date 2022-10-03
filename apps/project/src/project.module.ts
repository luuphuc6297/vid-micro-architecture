import { AuthModule, RmqModule } from '@app/commons';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { ProjectController } from './project.controller';
import { ProjectEntity } from './project.entity';
import { ProjectService } from './project.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                RABBIT_MQ_URI: Joi.string().required(),
                RABBIT_MQ_PROJECT_QUEUE: Joi.string().required(),
                MYSQL_DB_HOST: Joi.string().required(),
                MYSQL_DB_PORT: Joi.number().required(),
                MYSQL_DB_USERNAME: Joi.string().required(),
                MYSQL_DB_PASSWORD: Joi.string().required(),
                MYSQL_DB_NAME: Joi.string().required(),
            }),
            envFilePath: './apps/project/.env',
        }),
        RmqModule,
        AuthModule,
        TypeOrmModule.forFeature([ProjectEntity]),
    ],
    controllers: [ProjectController],
    providers: [ProjectService],
})
export class ProjectModule {}
