import { MigrationInterface, QueryRunner } from "typeorm";

export class addBusinessUser1657631943532 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.query(
      "INSERT INTO `user_businesses_business` (`userId`, `businessId`) VALUES (1, 1)"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
