import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from './src/todo/todo.entity';
import { User } from './src/auth/user.entity';

const config: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.DATABASE_URL,
  synchronize: true,
  useUnifiedTopology: true,
  entities: [Todo, User],
};

export default config;
