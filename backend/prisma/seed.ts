// backend/prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1) seed Livre
  await prisma.livre.createMany({
    data: [
      { titre: 'Le Petit Prince',            genre: 'Conte',       auteur: 'Antoine de Saint‑Exupéry' },
      { titre: '1984',                        genre: 'Dystopie',    auteur: 'George Orwell' },
      { titre: 'Le Seigneur des Anneaux',     genre: 'Fantasy',     auteur: 'J.R.R. Tolkien' },
      { titre: 'Dune',                        genre: 'Science‑   fic‑', auteur: 'Frank Herbert' },
      { titre: `Harry Potter à l'école...`,  genre: 'Fantasy',     auteur: 'J.K. Rowling' },
      { titre: 'Crime et Châtiment',         genre: 'Classique',   auteur: 'Fiodor Dostoïevski' },
      { titre: 'Les Misérables',              genre: 'Classique',   auteur: 'Victor Hugo' },
      { titre: 'To Kill a Mockingbird',       genre: 'Roman',       auteur: 'Harper Lee' },
      { titre: 'Orgueil et Préjugés',         genre: 'Romance',     auteur: 'Jane Austen' },
      { titre: 'Le Hobbit',                   genre: 'Fantasy',     auteur: 'J.R.R. Tolkien' },
      { titre: 'Les Fleurs du mal',           genre: 'Poésie',      auteur: 'Charles Baudelaire' },
      { titre: 'Frankenstein',                genre: 'Gothique',    auteur: 'Mary Shelley' },
    ],
  });

  // 2) seed Adherent
  await prisma.adherent.createMany({
    data: [
      { nom: 'Dupont',    rue: 'Rue des Fleurs',        no: '12',  ville: 'Montréal',         cPost: 'H2X1Y4' },
      { nom: 'Martin',    rue: 'Boulevard St‑Laurent',  no: '345', ville: 'Montréal',         cPost: 'H2X3T1' },
      { nom: 'Tremblay',  rue: 'Avenue du Parc',        no: '78',  ville: 'Québec',           cPost: 'G1R2L9' },
      { nom: 'Roy',       rue: 'Rue Sainte‑Catherine',  no: '210', ville: 'Montréal',         cPost: 'H3B1A7' },
      { nom: 'Gagnon',    rue: 'Chemin du Roy',         no: '5',   ville: 'Trois‑Rivières',   cPost: 'G9A1P4' },
      { nom: 'Bouchard',  rue: 'Rue Notre‑Dame',        no: '99',  ville: 'Laval',             cPost: 'H7N5P1' },
      { nom: 'Fournier',  rue: 'Rue Principale',        no: '150', ville: 'Québec',           cPost: 'G1V4L2' },
      { nom: 'Gauthier',  rue: 'Rue Victoria',          no: '22',  ville: 'Montréal',         cPost: 'H2Y2E2' },
      { nom: 'Leclerc',   rue: 'Boulevard Taschereau',  no: '310', ville: 'Longueuil',        cPost: 'J4L2Z8' },
      { nom: 'Pelletier', rue: 'Rue Wellington',        no: '47',  ville: 'Sherbrooke',       cPost: 'J1H2E8' },
      { nom: 'Moreau',    rue: 'Rue Saint‑Jean',        no: '88',  ville: 'Québec',           cPost: 'G1R1P7' },
      { nom: 'Lambert',   rue: 'Rue de la Commune',     no: '60',  ville: 'Montréal',         cPost: 'H2Y2E3' },
    ],
  });

  // 3) seed Emprunt
  await prisma.emprunt.createMany({
    data: [
      { idLivre: 1,  idAdherent: 1, dateEmprunt: new Date('2025-01-01'), dateRetour: new Date('2025-01-15') },
      { idLivre: 2,  idAdherent: 1, dateEmprunt: new Date('2025-01-10'), dateRetour: new Date('2025-01-24') },
      { idLivre: 3,  idAdherent: 1, dateEmprunt: new Date('2025-02-05'), dateRetour: new Date('2025-02-19') },
      { idLivre: 4,  idAdherent: 2, dateEmprunt: new Date('2025-01-05'), dateRetour: new Date('2025-01-19') },
      { idLivre: 5,  idAdherent: 2, dateEmprunt: new Date('2025-02-01'), dateRetour: new Date('2025-02-15') },
      { idLivre: 6,  idAdherent: 2, dateEmprunt: new Date('2025-02-10'), dateRetour: new Date('2025-02-24') },
      { idLivre: 7,  idAdherent: 2, dateEmprunt: new Date('2025-03-01'), dateRetour: new Date('2025-03-15') },
      { idLivre: 8,  idAdherent: 3, dateEmprunt: new Date('2025-03-05'), dateRetour: new Date('2025-03-19') },
      { idLivre: 9,  idAdherent: 4, dateEmprunt: new Date('2025-03-10'), dateRetour: new Date('2025-03-24') },
      { idLivre: 10, idAdherent: 5, dateEmprunt: new Date('2025-02-15'), dateRetour: new Date('2025-03-01') },
      { idLivre: 11, idAdherent: 6, dateEmprunt: new Date('2025-03-12'), dateRetour: new Date('2025-03-26') },
      { idLivre: 12, idAdherent: 7, dateEmprunt: new Date('2025-03-20'), dateRetour: new Date('2025-04-03') },
    ],
  });

  // 4) seed Commande
  await prisma.commande.createMany({
    data: [
      { idLivre: 1,  idAdherent: 3,  dateCommande: new Date('2025-03-01'), etatCommande: 'en attente' },
      { idLivre: 2,  idAdherent: 4,  dateCommande: new Date('2025-03-05'), etatCommande: 'expédiée' },
      { idLivre: 3,  idAdherent: 5,  dateCommande: new Date('2025-02-20'), etatCommande: 'livrée' },
      { idLivre: 4,  idAdherent: 6,  dateCommande: new Date('2025-01-15'), etatCommande: 'expédiée' },
      { idLivre: 5,  idAdherent: 7,  dateCommande: new Date('2025-01-20'), etatCommande: 'annulée' },
      { idLivre: 6,  idAdherent: 8,  dateCommande: new Date('2025-02-25'), etatCommande: 'expédiée' },
      { idLivre: 7,  idAdherent: 9,  dateCommande: new Date('2025-03-18'), etatCommande: 'en attente' },
      { idLivre: 8,  idAdherent: 10, dateCommande: new Date('2025-03-22'), etatCommande: 'livrée' },
      { idLivre: 9,  idAdherent: 11, dateCommande: new Date('2025-03-02'), etatCommande: 'livrée' },
      { idLivre: 10, idAdherent: 12, dateCommande: new Date('2025-02-28'), etatCommande: 'annulée' },
      { idLivre: 11, idAdherent: 1,  dateCommande: new Date('2025-03-30'), etatCommande: 'expédiée' },
      { idLivre: 12, idAdherent: 2,  dateCommande: new Date('2025-03-31'), etatCommande: 'en attente' },
    ],
  });

  console.log('✅ Seeding finished.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
