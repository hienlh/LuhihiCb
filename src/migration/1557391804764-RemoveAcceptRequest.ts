import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveAcceptRequest1557391804764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "request_user" DROP COLUMN "accept"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "request_user" ADD "accept" boolean NOT NULL DEFAULT false`);
    }

}
