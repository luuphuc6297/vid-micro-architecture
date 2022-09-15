import { DatabaseModule, RmqModule } from '@app/commons';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'apps/auth/src/auth.module';
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
        DatabaseModule,
        RmqModule.register({
            name: PROJECT_SERVICE,
        }),
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
    exports: [AppService],
})
export class AppModule {}
