import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAuthorTable1678038467686 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`create table graphql.authors (
            id uuid primary key,
            name varchar(100) not null
        );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table graphql.authors;`);
  }
}
