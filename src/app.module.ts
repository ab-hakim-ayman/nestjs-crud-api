import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const databaseUrl = configService.get<string>('process.env.DATABASE_URL');
        return {
          type: 'mongodb',
          url: databaseUrl,
          synchronize: true,
          useUnifiedTopology: true,
          entities: [__dirname + '/**/*.entity.{js,ts}'],
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    TodoModule,
  ],
})
export class AppModule {}
