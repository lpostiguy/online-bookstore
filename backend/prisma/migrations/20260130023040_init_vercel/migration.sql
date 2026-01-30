-- CreateTable
CREATE TABLE "Livre" (
    "idLivre" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "auteur" TEXT NOT NULL,

    CONSTRAINT "Livre_pkey" PRIMARY KEY ("idLivre")
);

-- CreateTable
CREATE TABLE "Adherent" (
    "idAdherent" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "rue" TEXT NOT NULL,
    "no" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "cPost" TEXT NOT NULL,

    CONSTRAINT "Adherent_pkey" PRIMARY KEY ("idAdherent")
);

-- CreateTable
CREATE TABLE "Emprunt" (
    "idEmprunt" SERIAL NOT NULL,
    "idLivre" INTEGER NOT NULL,
    "idAdherent" INTEGER NOT NULL,
    "dateEmprunt" TIMESTAMP(3) NOT NULL,
    "dateRetour" TIMESTAMP(3),

    CONSTRAINT "Emprunt_pkey" PRIMARY KEY ("idEmprunt")
);

-- CreateTable
CREATE TABLE "Commande" (
    "idCommande" SERIAL NOT NULL,
    "idLivre" INTEGER NOT NULL,
    "idAdherent" INTEGER NOT NULL,
    "dateCommande" TIMESTAMP(3) NOT NULL,
    "etatCommande" TEXT NOT NULL,

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("idCommande")
);

-- CreateIndex
CREATE INDEX "idx_emprunte_livre" ON "Emprunt"("idLivre");

-- CreateIndex
CREATE INDEX "idx_emprunte_adh" ON "Emprunt"("idAdherent");

-- CreateIndex
CREATE INDEX "idx_commande_livre" ON "Commande"("idLivre");

-- CreateIndex
CREATE INDEX "idx_commande_adh" ON "Commande"("idAdherent");

-- AddForeignKey
ALTER TABLE "Emprunt" ADD CONSTRAINT "Emprunt_idLivre_fkey" FOREIGN KEY ("idLivre") REFERENCES "Livre"("idLivre") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emprunt" ADD CONSTRAINT "Emprunt_idAdherent_fkey" FOREIGN KEY ("idAdherent") REFERENCES "Adherent"("idAdherent") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_idLivre_fkey" FOREIGN KEY ("idLivre") REFERENCES "Livre"("idLivre") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_idAdherent_fkey" FOREIGN KEY ("idAdherent") REFERENCES "Adherent"("idAdherent") ON DELETE RESTRICT ON UPDATE CASCADE;
