import {MigrationInterface, QueryRunner} from "typeorm";

export class AddChattingWithUser1557388100976 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "chattingWithId" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_612568adca44fa184ed7537d9c6" UNIQUE ("chattingWithId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_612568adca44fa184ed7537d9c6" FOREIGN KEY ("chattingWithId") REFERENCES "user"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_612568adca44fa184ed7537d9c6"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_612568adca44fa184ed7537d9c6"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "chattingWithId"`);
    }

}
