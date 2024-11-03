/*
  Warnings:

  - You are about to drop the column `fromAccount` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `toAccount` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "fromAccount",
DROP COLUMN "toAccount",
ADD COLUMN     "fromAccountId" INTEGER,
ADD COLUMN     "toAccountId" INTEGER;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_fromAccountId_fkey" FOREIGN KEY ("fromAccountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_toAccountId_fkey" FOREIGN KEY ("toAccountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
