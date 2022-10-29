/*
  Warnings:

  - Added the required column `birthday` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `married` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pet` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tech_stack` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `birthday` DATETIME(3) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `married` BOOLEAN NOT NULL,
    ADD COLUMN `pet` VARCHAR(191) NOT NULL,
    ADD COLUMN `tech_stack` VARCHAR(191) NOT NULL;
