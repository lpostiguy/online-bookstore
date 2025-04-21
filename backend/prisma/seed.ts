import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1) seed Livre
  await prisma.livre.createMany({
    data: [
      // --- Romance ---
      { titre: 'Le Temps d’un automne', genre: 'Romance', auteur: 'Nicholas Sparks' },
      { titre: 'Avant toi', genre: 'Romance', auteur: 'Jojo Moyes' },
      { titre: 'Les pages de notre amour', genre: 'Romance', auteur: 'Nicholas Sparks' },
      { titre: 'La délicatesse', genre: 'Romance', auteur: 'David Foenkinos' },

      // --- Fiction ---
      { titre: 'Le Parfum', genre: 'Fiction', auteur: 'Patrick Süskind' },
      { titre: 'Shutter Island', genre: 'Fiction', auteur: 'Dennis Lehane' },
      { titre: 'La Route', genre: 'Fiction', auteur: 'Cormac McCarthy' },
      { titre: 'Le Nom de la rose', genre: 'Fiction', auteur: 'Umberto Eco' },

      // --- Biographies ---
      { titre: 'Steve Jobs', genre: 'Biographies', auteur: 'Walter Isaacson' },
      { titre: 'Becoming', genre: 'Biographies', auteur: 'Michelle Obama' },
      { titre: 'Elon Musk', genre: 'Biographies', auteur: 'Ashlee Vance' },
      { titre: 'Moi, Malala', genre: 'Biographies', auteur: 'Malala Yousafzai' },

      // --- Poésie ---
      { titre: 'Le Bateau ivre', genre: 'Poésie', auteur: 'Arthur Rimbaud' },
      { titre: 'Paroles', genre: 'Poésie', auteur: 'Jacques Prévert' },
      { titre: 'Le Cornet à dés', genre: 'Poésie', auteur: 'Max Jacob' },

      // --- Bandes dessinées ---
      { titre: 'Blake et Mortimer', genre: 'Bandes dessinées', auteur: 'Edgar P. Jacobs' },
      { titre: 'Lucky Luke', genre: 'Bandes dessinées', auteur: 'Morris' },
      { titre: 'Les Schtroumpfs', genre: 'Bandes dessinées', auteur: 'Peyo' },
      { titre: 'Garfield', genre: 'Bandes dessinées', auteur: 'Jim Davis' },

      // --- Cuisine ---
      { titre: 'Fait maison', genre: 'Cuisine', auteur: 'Cyril Lignac' },
      { titre: 'Cuisine végétarienne', genre: 'Cuisine', auteur: 'Delphine Pocard' },
      { titre: 'Pâtisserie !', genre: 'Cuisine', auteur: 'Christophe Felder' },
      { titre: 'La cuisine pour les nuls', genre: 'Cuisine', auteur: 'Bryan Miller' },

      // --- Histoire ---
      { titre: 'L’art de la guerre', genre: 'Histoire', auteur: 'Sun Tzu' },
      { titre: 'Les grandes dates de l’histoire de France', genre: 'Histoire', auteur: 'André Castelot' },
      { titre: 'Napoléon', genre: 'Histoire', auteur: 'André Castelot' },
      { titre: 'La Seconde Guerre mondiale', genre: 'Histoire', auteur: 'Winston Churchill' },

      // --- Mélange (existant déjà) ---
      { titre: 'Le Petit Prince', genre: 'Fiction', auteur: 'Antoine de Saint-Exupéry' },
      { titre: 'Le Seigneur des Anneaux', genre: 'Fiction', auteur: 'J.R.R. Tolkien' },
      { titre: 'Harry Potter à l’école des sorciers', genre: 'Fiction', auteur: 'J.K. Rowling' },
      { titre: 'Dune', genre: 'Fiction', auteur: 'Frank Herbert' },
      { titre: 'Crime et Châtiment', genre: 'Fiction', auteur: 'Fiodor Dostoïevski' },
      { titre: 'Les Misérables', genre: 'Fiction', auteur: 'Victor Hugo' },
      { titre: 'Le Hobbit', genre: 'Fiction', auteur: 'J.R.R. Tolkien' },
      { titre: 'Frankenstein', genre: 'Fiction', auteur: 'Mary Shelley' },
      { titre: 'To Kill a Mockingbird', genre: 'Fiction', auteur: 'Harper Lee' },
      { titre: 'L’Attrape-cœurs', genre: 'Fiction', auteur: 'J. D. Salinger' },
      { titre: 'Ne tirez pas sur l’oiseau moqueur', genre: 'Fiction', auteur: 'Harper Lee' },
      { titre: 'Fahrenheit 451', genre: 'Fiction', auteur: 'Ray Bradbury' },
    ],
  });

  // 2) seed Adherent
  await prisma.adherent.createMany({
    data: [
      { nom: 'Dupont', rue: 'Rue des Fleurs', no: '12', ville: 'Montréal', cPost: 'H2X1Y4' },
      { nom: 'Martin', rue: 'Boulevard St‑Laurent', no: '345', ville: 'Montréal', cPost: 'H2X3T1' },
      { nom: 'Tremblay', rue: 'Avenue du Parc', no: '78', ville: 'Québec', cPost: 'G1R2L9' },
      { nom: 'Roy', rue: 'Rue Sainte‑Catherine', no: '210', ville: 'Montréal', cPost: 'H3B1A7' },
      { nom: 'Gagnon', rue: 'Chemin du Roy', no: '5', ville: 'Trois‑Rivières', cPost: 'G9A1P4' },
      { nom: 'Bouchard', rue: 'Rue Notre‑Dame', no: '99', ville: 'Laval', cPost: 'H7N5P1' },
      { nom: 'Fournier', rue: 'Rue Principale', no: '150', ville: 'Québec', cPost: 'G1V4L2' },
      { nom: 'Gauthier', rue: 'Rue Victoria', no: '22', ville: 'Montréal', cPost: 'H2Y2E2' },
      { nom: 'Leclerc', rue: 'Boulevard Taschereau', no: '310', ville: 'Longueuil', cPost: 'J4L2Z8' },
      { nom: 'Pelletier', rue: 'Rue Wellington', no: '47', ville: 'Sherbrooke', cPost: 'J1H2E8' },
      { nom: 'Moreau', rue: 'Rue Saint‑Jean', no: '88', ville: 'Québec', cPost: 'G1R1P7' },
      { nom: 'Lambert', rue: 'Rue de la Commune', no: '60', ville: 'Montréal', cPost: 'H2Y2E3' },
    ],
  });

  // 3) seed Emprunt
  await prisma.emprunt.createMany({
    data: [
      // Pour l’adhérent 1, 5 emprunts
      { idLivre: 1,  idAdherent: 1, dateEmprunt: new Date('2025-01-01'), dateRetour: new Date('2025-01-15') },
      { idLivre: 2,  idAdherent: 1, dateEmprunt: new Date('2025-01-10'), dateRetour: new Date('2025-01-24') },
      { idLivre: 3,  idAdherent: 1, dateEmprunt: new Date('2025-02-01'), dateRetour: new Date('2025-02-15') },
      { idLivre: 4,  idAdherent: 1, dateEmprunt: new Date('2025-02-20'), dateRetour: new Date('2025-03-06') },
      { idLivre: 5,  idAdherent: 1, dateEmprunt: new Date('2025-03-10'), dateRetour: new Date('2025-03-24') },

      // Pour l’adhérent 2, 8 emprunts
      { idLivre: 6,  idAdherent: 2, dateEmprunt: new Date('2025-01-05'), dateRetour: new Date('2025-01-19') },
      { idLivre: 7,  idAdherent: 2, dateEmprunt: new Date('2025-01-15'), dateRetour: new Date('2025-01-29') },
      { idLivre: 8,  idAdherent: 2, dateEmprunt: new Date('2025-02-05'), dateRetour: new Date('2025-02-19') },
      { idLivre: 9,  idAdherent: 2, dateEmprunt: new Date('2025-02-15'), dateRetour: new Date('2025-03-01') },
      { idLivre: 10, idAdherent: 2, dateEmprunt: new Date('2025-03-01'), dateRetour: new Date('2025-03-15') },
      { idLivre: 11, idAdherent: 2, dateEmprunt: new Date('2025-03-15'), dateRetour: new Date('2025-03-29') },
      { idLivre: 12, idAdherent: 2, dateEmprunt: new Date('2025-04-01'), dateRetour: new Date('2025-04-15') },
      { idLivre: 1,  idAdherent: 2, dateEmprunt: new Date('2025-04-10'), dateRetour: new Date('2025-04-24') },

      // Pour l’adhérent 3, 4 emprunts
      { idLivre: 2, idAdherent: 3, dateEmprunt: new Date('2025-01-12'), dateRetour: new Date('2025-01-26') },
      { idLivre: 4, idAdherent: 3, dateEmprunt: new Date('2025-02-10'), dateRetour: new Date('2025-02-24') },
      { idLivre: 6, idAdherent: 3, dateEmprunt: new Date('2025-03-05'), dateRetour: new Date('2025-03-19') },
      { idLivre: 8, idAdherent: 3, dateEmprunt: new Date('2025-03-20'), dateRetour: new Date('2025-04-03') },

      // Pour l’adhérent 4, 6 emprunts
      { idLivre: 3,  idAdherent: 4, dateEmprunt: new Date('2025-01-20'), dateRetour: new Date('2025-02-03') },
      { idLivre: 5,  idAdherent: 4, dateEmprunt: new Date('2025-02-01'), dateRetour: new Date('2025-02-15') },
      { idLivre: 7,  idAdherent: 4, dateEmprunt: new Date('2025-02-18'), dateRetour: new Date('2025-03-04') },
      { idLivre: 9,  idAdherent: 4, dateEmprunt: new Date('2025-03-01'), dateRetour: new Date('2025-03-15') },
      { idLivre: 11, idAdherent: 4, dateEmprunt: new Date('2025-03-15'), dateRetour: new Date('2025-03-29') },
      { idLivre: 2,  idAdherent: 4, dateEmprunt: new Date('2025-04-05'), dateRetour: new Date('2025-04-19') },

      // Pour l’adhérent 5, 3 emprunts
      { idLivre: 10, idAdherent: 5, dateEmprunt: new Date('2025-02-12'), dateRetour: new Date('2025-02-26') },
      { idLivre: 12, idAdherent: 5, dateEmprunt: new Date('2025-03-10'), dateRetour: new Date('2025-03-24') },
      { idLivre: 1,  idAdherent: 5, dateEmprunt: new Date('2025-03-25'), dateRetour: new Date('2025-04-08') },

      // Ajout de quelques emprunts croisés pour pimenter
      { idLivre: 5,  idAdherent: 3, dateEmprunt: new Date('2025-04-01'), dateRetour: new Date('2025-04-15') },
      { idLivre: 8,  idAdherent: 1, dateEmprunt: new Date('2025-04-10'), dateRetour: new Date('2025-04-24') },
      { idLivre: 3,  idAdherent: 2, dateEmprunt: new Date('2025-04-12'), dateRetour: new Date('2025-04-26') },
    ],
  });

  // 4) seed Commande
  await prisma.commande.createMany({
    data: [
      // commandes variées, certains livres commandés plusieurs fois
      { idLivre: 1,  idAdherent: 1, dateCommande: new Date('2025-01-05'), etatCommande: 'expédiée' },
      { idLivre: 2,  idAdherent: 1, dateCommande: new Date('2025-01-15'), etatCommande: 'livrée' },
      { idLivre: 3,  idAdherent: 2, dateCommande: new Date('2025-02-01'), etatCommande: 'en attente' },
      { idLivre: 4,  idAdherent: 3, dateCommande: new Date('2025-02-10'), etatCommande: 'annulée' },
      { idLivre: 5,  idAdherent: 4, dateCommande: new Date('2025-02-20'), etatCommande: 'expédiée' },
      { idLivre: 6,  idAdherent: 5, dateCommande: new Date('2025-03-01'), etatCommande: 'livrée' },
      { idLivre: 7,  idAdherent: 6, dateCommande: new Date('2025-03-10'), etatCommande: 'expédiée' },
      { idLivre: 8,  idAdherent: 7, dateCommande: new Date('2025-03-15'), etatCommande: 'en attente' },
      { idLivre: 9,  idAdherent: 8, dateCommande: new Date('2025-03-22'), etatCommande: 'livrée' },
      { idLivre: 10, idAdherent: 9, dateCommande: new Date('2025-03-25'), etatCommande: 'expédiée' },
      { idLivre: 11, idAdherent: 10, dateCommande: new Date('2025-03-27'), etatCommande: 'annulée' },
      { idLivre: 12, idAdherent: 11, dateCommande: new Date('2025-03-29'), etatCommande: 'livrée' },
      // quelques re‑commandes de certains livres
      { idLivre: 1,  idAdherent: 2, dateCommande: new Date('2025-04-01'), etatCommande: 'en attente' },
      { idLivre: 5,  idAdherent: 3, dateCommande: new Date('2025-04-05'), etatCommande: 'expédiée' },
      { idLivre: 2,  idAdherent: 4, dateCommande: new Date('2025-04-10'), etatCommande: 'livrée' },
      { idLivre: 3,  idAdherent: 5, dateCommande: new Date('2025-04-12'), etatCommande: 'en attente' },
      { idLivre: 7,  idAdherent: 6, dateCommande: new Date('2025-04-15'), etatCommande: 'expédiée' },
      { idLivre: 8,  idAdherent: 7, dateCommande: new Date('2025-04-18'), etatCommande: 'livrée' },
      { idLivre: 9,  idAdherent: 8, dateCommande: new Date('2025-04-20'), etatCommande: 'expédiée' },
    ],
  });

  console.log('✅');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
