import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();

export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  schema: process.env.DATABASE_SCHEMA,
  entities: [],
  migrations: [],
});
