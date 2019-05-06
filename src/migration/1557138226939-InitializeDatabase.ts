import {MigrationInterface, QueryRunner} from "typeorm";

export class InitializeDatabase1557138226939 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user_picture" ("userId" integer NOT NULL, "attachmentId" integer NOT NULL, "selected" boolean NOT NULL DEFAULT false, "date" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_babd5bd767bb12145ed6a3156c2" PRIMARY KEY ("userId", "attachmentId"))`);
        await queryRunner.query(`CREATE TABLE "user" ("userId" integer NOT NULL, "name" character varying NOT NULL, "gender" integer NOT NULL, "locale" character varying NOT NULL DEFAULT 'vi_VN', "avatar" character varying NOT NULL, "needLove" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "request_user" ("userId" integer NOT NULL, "userRequestId" integer NOT NULL, "accept" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_55b9a1d7020244b5151d79f5491" PRIMARY KEY ("userId", "userRequestId"))`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD CONSTRAINT "FK_4033363dba0db516acb82ff8d14" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "FK_f58963bf70ed9a68ef3389aba6e" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "FK_9dad918a916beae05fb5c754330" FOREIGN KEY ("userRequestId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "FK_9dad918a916beae05fb5c754330"`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "FK_f58963bf70ed9a68ef3389aba6e"`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP CONSTRAINT "FK_4033363dba0db516acb82ff8d14"`);
        await queryRunner.query(`DROP TABLE "request_user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "user_picture"`);
    }

}
