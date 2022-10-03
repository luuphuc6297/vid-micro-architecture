import { MongoModule, RmqModule } from '@app/commons';
import { MysqlModule } from '@app/commons/database/mysql/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'apps/auth/src/auth.module';
import { ProjectModule } from 'apps/project/src/project.module';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PROJECT_SERVICE } from './constants/services';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                MONGODB_URI: Joi.string().required(),
                PORT: Joi.number().required(),
            }),
            envFilePath: './apps/main-app/.env',
        }),
        RmqModule.register({
            name: PROJECT_SERVICE,
        }),
        MongoModule,
        MysqlModule,
        AuthModule,
        ProjectModule,
    ],
    controllers: [AppController],
    providers: [AppService],
    exports: [AppService],
})
export class AppModule {}
