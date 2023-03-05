import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAuthorTable1678038467686 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`create table graphql.authors (
            id uuid primary key,
            name varchar(100) not null
        );`);

    await queryRunner.query(`
          INSERT INTO GRAPHQL.AUTHORS (id, name)
          VALUES ('958d6251-a249-4d73-b9b4-c54eb4a5e2d7', 'Author A');
    `);

    await queryRunner.query(`
          INSERT INTO GRAPHQL.AUTHORS (id, name)
          VALUES ('7cb0f651-f3ac-4454-8666-89fab0651bea', 'Author B');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table graphql.authors;`);
  }
}
