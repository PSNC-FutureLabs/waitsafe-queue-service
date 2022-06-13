/*
  Warnings:

  - Added the required column `estimatedTime` to the `Visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hospitalId` to the `Visit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `queueId` to the `Visit` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Visit_cardNumber_key";

-- AlterTable
ALTER TABLE "Visit" ADD COLUMN     "estimatedTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "hospitalId" TEXT NOT NULL,
ADD COLUMN     "queueId" TEXT NOT NULL;
