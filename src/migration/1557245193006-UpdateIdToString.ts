import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateIdToString1557245193006 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user_picture" DROP CONSTRAINT "FK_4033363dba0db516acb82ff8d14"`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP CONSTRAINT "PK_babd5bd767bb12145ed6a3156c2"`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD CONSTRAINT "PK_79609219935c8118490cd09f73f" PRIMARY KEY ("attachmentId")`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD "userId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP CONSTRAINT "PK_79609219935c8118490cd09f73f"`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD CONSTRAINT "PK_babd5bd767bb12145ed6a3156c2" PRIMARY KEY ("attachmentId", "userId")`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP CONSTRAINT "PK_babd5bd767bb12145ed6a3156c2"`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD CONSTRAINT "PK_4033363dba0db516acb82ff8d14" PRIMARY KEY ("userId")`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP COLUMN "attachmentId"`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD "attachmentId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP CONSTRAINT "PK_4033363dba0db516acb82ff8d14"`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD CONSTRAINT "PK_babd5bd767bb12145ed6a3156c2" PRIMARY KEY ("userId", "attachmentId")`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "FK_f58963bf70ed9a68ef3389aba6e"`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "FK_9dad918a916beae05fb5c754330"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_d72ea127f30e21753c9e229891e"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "userId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId")`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "PK_55b9a1d7020244b5151d79f5491"`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "PK_9dad918a916beae05fb5c754330" PRIMARY KEY ("userRequestId")`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD "userId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "PK_9dad918a916beae05fb5c754330"`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "PK_55b9a1d7020244b5151d79f5491" PRIMARY KEY ("userRequestId", "userId")`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "PK_55b9a1d7020244b5151d79f5491"`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "PK_f58963bf70ed9a68ef3389aba6e" PRIMARY KEY ("userId")`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP COLUMN "userRequestId"`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD "userRequestId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "PK_f58963bf70ed9a68ef3389aba6e"`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "PK_55b9a1d7020244b5151d79f5491" PRIMARY KEY ("userId", "userRequestId")`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD CONSTRAINT "FK_4033363dba0db516acb82ff8d14" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "FK_f58963bf70ed9a68ef3389aba6e" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "FK_9dad918a916beae05fb5c754330" FOREIGN KEY ("userRequestId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "FK_9dad918a916beae05fb5c754330"`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "FK_f58963bf70ed9a68ef3389aba6e"`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP CONSTRAINT "FK_4033363dba0db516acb82ff8d14"`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "PK_55b9a1d7020244b5151d79f5491"`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "PK_f58963bf70ed9a68ef3389aba6e" PRIMARY KEY ("userId")`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP COLUMN "userRequestId"`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD "userRequestId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "PK_f58963bf70ed9a68ef3389aba6e"`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "PK_55b9a1d7020244b5151d79f5491" PRIMARY KEY ("userRequestId", "userId")`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "PK_55b9a1d7020244b5151d79f5491"`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "PK_9dad918a916beae05fb5c754330" PRIMARY KEY ("userRequestId")`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "request_user" DROP CONSTRAINT "PK_9dad918a916beae05fb5c754330"`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "PK_55b9a1d7020244b5151d79f5491" PRIMARY KEY ("userId", "userRequestId")`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_d72ea127f30e21753c9e229891e"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId")`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "FK_9dad918a916beae05fb5c754330" FOREIGN KEY ("userRequestId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request_user" ADD CONSTRAINT "FK_f58963bf70ed9a68ef3389aba6e" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP CONSTRAINT "PK_babd5bd767bb12145ed6a3156c2"`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD CONSTRAINT "PK_4033363dba0db516acb82ff8d14" PRIMARY KEY ("userId")`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP COLUMN "attachmentId"`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD "attachmentId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP CONSTRAINT "PK_4033363dba0db516acb82ff8d14"`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD CONSTRAINT "PK_babd5bd767bb12145ed6a3156c2" PRIMARY KEY ("attachmentId", "userId")`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP CONSTRAINT "PK_babd5bd767bb12145ed6a3156c2"`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD CONSTRAINT "PK_79609219935c8118490cd09f73f" PRIMARY KEY ("attachmentId")`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_picture" DROP CONSTRAINT "PK_79609219935c8118490cd09f73f"`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD CONSTRAINT "PK_babd5bd767bb12145ed6a3156c2" PRIMARY KEY ("userId", "attachmentId")`);
        await queryRunner.query(`ALTER TABLE "user_picture" ADD CONSTRAINT "FK_4033363dba0db516acb82ff8d14" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
