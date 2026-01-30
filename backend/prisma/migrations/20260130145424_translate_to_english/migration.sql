/*
  Warnings:

  - You are about to drop the `Adherent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Commande` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Emprunt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Livre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Commande" DROP CONSTRAINT "Commande_idAdherent_fkey";

-- DropForeignKey
ALTER TABLE "Commande" DROP CONSTRAINT "Commande_idLivre_fkey";

-- DropForeignKey
ALTER TABLE "Emprunt" DROP CONSTRAINT "Emprunt_idAdherent_fkey";

-- DropForeignKey
ALTER TABLE "Emprunt" DROP CONSTRAINT "Emprunt_idLivre_fkey";

-- DropTable
DROP TABLE "Adherent";

-- DropTable
DROP TABLE "Commande";

-- DropTable
DROP TABLE "Emprunt";

-- DropTable
DROP TABLE "Livre";

-- CreateTable
CREATE TABLE "Book" (
    "bookId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "Member" (
    "memberId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "streetNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("memberId")
);

-- CreateTable
CREATE TABLE "Loan" (
    "loanId" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,
    "loanDate" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3),

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("loanId")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderId" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId")
);

-- CreateIndex
CREATE INDEX "idx_loan_book" ON "Loan"("bookId");

-- CreateIndex
CREATE INDEX "idx_loan_member" ON "Loan"("memberId");

-- CreateIndex
CREATE INDEX "idx_order_book" ON "Order"("bookId");

-- CreateIndex
CREATE INDEX "idx_order_member" ON "Order"("memberId");

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;
