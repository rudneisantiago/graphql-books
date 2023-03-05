import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBookAuthorTable1678052248491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE GRAPHQL.BOOK_AUTHOR (
        BOOK_ID UUID,
        AUTHOR_ID UUID,
        PRIMARY KEY (BOOK_ID, AUTHOR_ID)
      );
    `);

    await queryRunner.query(`
      ALTER TABLE graphql.book_author 
      ADD CONSTRAINT book_foreign 
      FOREIGN KEY (book_id) 
      REFERENCES graphql.books (id);
    `);

    await queryRunner.query(`
      ALTER TABLE graphql.book_author 
      ADD CONSTRAINT author_foreign 
      FOREIGN KEY (author_id) 
      REFERENCES graphql.authors (id);
    `);

    await queryRunner.query(`
      INSERT INTO GRAPHQL.BOOK_AUTHOR (book_id, author_id)
      VALUES ('8515da89-bb65-4f13-9a6c-bbbea0cc589e', '958d6251-a249-4d73-b9b4-c54eb4a5e2d7');
    `);

    await queryRunner.query(`
      INSERT INTO GRAPHQL.BOOK_AUTHOR (book_id, author_id)
      VALUES ('8515da89-bb65-4f13-9a6c-bbbea0cc589e', '7cb0f651-f3ac-4454-8666-89fab0651bea');
    `);

    await queryRunner.query(`
      INSERT INTO GRAPHQL.BOOK_AUTHOR (book_id, author_id)
      VALUES ('4ae72443-451f-45b5-9784-a7320191540d', '958d6251-a249-4d73-b9b4-c54eb4a5e2d7');
    `);

    await queryRunner.query(`
      INSERT INTO GRAPHQL.BOOK_AUTHOR (book_id, author_id)
      VALUES ('4ae72443-451f-45b5-9784-a7320191540d', '7cb0f651-f3ac-4454-8666-89fab0651bea');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE graphql.book_author;
    `);
  }
}
