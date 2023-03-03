import { MigrationInterface, QueryRunner } from 'typeorm';

export class AuthorMigration1677871358649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE graphql.BOOKS(
                                id UUID primary key,
                                name VARCHAR(30),
                                price NUMERIC
                            );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS graphql.BOOKS');
  }
}
