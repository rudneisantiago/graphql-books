import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBookTable1678038438623 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`create table graphql.books(
            id uuid primary key,
            name varchar(50) not null,
            price numeric not null
        );`);

    await queryRunner.query(`
      INSERT INTO GRAPHQL.BOOKS (id, name, price)
      VALUES ('8515da89-bb65-4f13-9a6c-bbbea0cc589e', 'Book A', 30.5);
    `);

    await queryRunner.query(`
      INSERT INTO GRAPHQL.BOOKS (id, name, price)
      VALUES ('4ae72443-451f-45b5-9784-a7320191540d', 'Book B', 50.3);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table graphql.books;`);
  }
}
