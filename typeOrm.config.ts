import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { Book } from './src/books/entities/book.entity';
import { Author } from './src/author/entities/author.entity';
import { CreateBookTable1678038438623 } from './migrations/1678038438623-CreateBookTable';
import { CreateAuthorTable1678038467686 } from './migrations/1678038467686-CreateAuthorTable';
import { CreateBookAuthorTable1678052248491 } from './migrations/1678052248491-CreateBookAuthorTable';

ConfigModule.forRoot();

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  schema: process.env.DATABASE_SCHEMA,
  entities: [Book, Author],
  migrations: [
    CreateBookTable1678038438623,
    CreateAuthorTable1678038467686,
    CreateBookAuthorTable1678052248491,
  ],
});
