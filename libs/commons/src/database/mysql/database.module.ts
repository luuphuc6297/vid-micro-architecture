import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get<string>('MYSQL_DB_HOST'),
                port: configService.get<number>('MYSQL_DB_PROT'),
                username: configService.get<string>('MYSQL_DB_USERNAME'),
                password: configService.get<string>('MYSQL_DB_PASSWORD'),
                database: configService.get<string>('MYSQL_DB_NAME'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class MysqlModule {}
