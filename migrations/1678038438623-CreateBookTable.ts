import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBookTable1678038438623 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`create table graphql.books(
            id uuid primary key,
            name varchar(50) not null,
            price numeric not null
        );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table graphql.books;`);
  }
}
