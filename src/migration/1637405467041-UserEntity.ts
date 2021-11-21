import { MigrationInterface, QueryRunner } from "typeorm";

/**
 *   @Doc: https://www.tutorialspoint.com/typeorm/typeorm_migrations.htm
 *   EXAMPLE:
 *   For create migration:  typeorm migration:create -n UserEntity
 *   For Run Migration:  typeorm migration:run
 * **/


export class UserEntity1637405467041 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE users
            (
                id         INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                email      VARCHAR(100) unique,
                first_name VARCHAR(100),
                last_name  VARCHAR(100),
                password   VARCHAR(100),
                created_at VARCHAR(100),
                updated_at VARCHAR(100)
            )
                ENGINE = InnoDB;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users;`)
    }
}
