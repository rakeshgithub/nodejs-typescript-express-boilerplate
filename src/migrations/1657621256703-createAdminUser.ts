import { MigrationInterface, QueryRunner } from "typeorm";

export class createAdminUser1657621256703 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.query(
      "INSERT INTO `business` (`uuid`, `name`,`mobile`, `mobileIsd`,`email`,`gstn`,`status`,`invoiceStartCounter`,`invoiceNumberFormat`,`createdBy`) VALUES ('cae14210-01ca-11ed-b939-0242ac120002', 'Test Business', '999999999', '91', 'admin@admin.com', '1234567890987', 1, 1, 'INV', 1)"
    );

    await queryRunner.manager.query(
      "INSERT INTO `role` (`name`, `businessId`) VALUES ('Super Admin', 1)"
    );

    await queryRunner.manager.query(
      "INSERT INTO `user` (`uuid`, `name`,`mobile`, `mobileIsd`,`email`, `password`, `status`, `roleId`) VALUES ('a6820996-01c9-11ed-b939-0242ac120002', 'admin', '9999999999', '91','admin@admin.com', '123456', 1, '1')"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
