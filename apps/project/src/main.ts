import { RmqService } from '@app/commons';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ProjectModule } from './project.module';

async function bootstrap() {
    const app = await NestFactory.create(ProjectModule);
    const rmqService = app.get<RmqService>(RmqService);

    app.connectMicroservice(rmqService.getOptions('PROJECT'));
    const configService = app.get(ConfigService);

    await app.startAllMicroservices();
    await app.listen(configService.get('PORT'));
}
bootstrap();
