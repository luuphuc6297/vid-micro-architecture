import { RmqService } from '@app/commons';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { RmqOptions } from '@nestjs/microservices';
import { AuthModule } from './auth.module';

async function bootstrap() {
    const app = await NestFactory.create(AuthModule);
    const rmqService = app.get<RmqService>(RmqService);

    app.connectMicroservice<RmqOptions>(rmqService.getOptions('AUTH', true));

    app.useGlobalPipes(new ValidationPipe());
    const configService = app.get(ConfigService);

    console.log('auth');
    await app.startAllMicroservices();
    await app.listen(configService.get('PORT'));
}
bootstrap();
