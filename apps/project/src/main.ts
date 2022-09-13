import { RmqService } from '@app/commons';
import { NestFactory } from '@nestjs/core';
import { ProjectModule } from './project.module';

async function bootstrap() {
    const app = await NestFactory.create(ProjectModule);
    const rmqService = app.get<RmqService>(RmqService);

    app.connectMicroservice(rmqService.getOptions('PROJECT'));

    console.log('project');
    await app.startAllMicroservices();
}
bootstrap();
