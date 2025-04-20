/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Livre" (
    "idLivre" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "auteur" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Adherent" (
    "idAdherent" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "rue" TEXT NOT NULL,
    "no" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "cPost" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Emprunt" (
    "idEmprunt" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idLivre" INTEGER NOT NULL,
    "idAdherent" INTEGER NOT NULL,
    "dateEmprunt" DATETIME NOT NULL,
    "dateRetour" DATETIME,
    CONSTRAINT "Emprunt_idLivre_fkey" FOREIGN KEY ("idLivre") REFERENCES "Livre" ("idLivre") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Emprunt_idAdherent_fkey" FOREIGN KEY ("idAdherent") REFERENCES "Adherent" ("idAdherent") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Commande" (
    "idCommande" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idLivre" INTEGER NOT NULL,
    "idAdherent" INTEGER NOT NULL,
    "dateCommande" DATETIME NOT NULL,
    "etatCommande" TEXT NOT NULL,
    CONSTRAINT "Commande_idLivre_fkey" FOREIGN KEY ("idLivre") REFERENCES "Livre" ("idLivre") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Commande_idAdherent_fkey" FOREIGN KEY ("idAdherent") REFERENCES "Adherent" ("idAdherent") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "idx_emprunte_livre" ON "Emprunt"("idLivre");

-- CreateIndex
CREATE INDEX "idx_emprunte_adh" ON "Emprunt"("idAdherent");

-- CreateIndex
CREATE INDEX "idx_commande_livre" ON "Commande"("idLivre");

-- CreateIndex
CREATE INDEX "idx_commande_adh" ON "Commande"("idAdherent");
