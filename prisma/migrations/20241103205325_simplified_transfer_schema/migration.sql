/*
  Warnings:

  - You are about to drop the column `fromAccountId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `toAccountId` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "fromAccountId",
DROP COLUMN "toAccountId",
ADD COLUMN     "fromAccountNumber" INTEGER,
ADD COLUMN     "toAccountNumber" INTEGER;
