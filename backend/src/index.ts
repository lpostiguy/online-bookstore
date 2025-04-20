import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

// 1) Obtenir la liste de tous les livres
app.get('/livres', async (req, res) => {
  const livres = await prisma.livre.findMany();
  res.json(livres);
});

// 2) Commander un livre
app.post('/commandes', async (req, res) => {
  const { userId, livreId } = req.body;
  const commande = await prisma.commande.create({
    data: {
      idAdherent: userId,
      idLivre: livreId,
      dateCommande: new Date(),
      etatCommande: 'en attente',
    }
  });
  res.status(201).json(commande);
});

// 3) Voir la liste de mes livres commandé
// GET /mes-commandes?userId= ..
app.get('/mes-commandes', async (req, res) => {
  const userId = Number(req.query.userId);
  const commandes = await prisma.commande.findMany({
    where: { idAdherent: userId },
    include: { livre: true }
  });
  res.json(commandes);
});

// 4) Emprunter un livre
// POST { userId: number, livreId: number }
app.post('/emprunts', async (req, res) => {
  const { userId, livreId } = req.body;
  const emprunt = await prisma.emprunt.create({
    data: {
      idAdherent: userId,
      idLivre: livreId,
      dateEmprunt: new Date(),
      // dateRetour est calculée par le trigger ou reste null
    }
  });
  res.status(201).json(emprunt);
});

// 5) Voir la liste de MES livres empruntés
// GET /mes-emprunts?userId=…
app.get('/mes-emprunts', async (req, res) => {
  const userId = Number(req.query.userId);
  const emprunts = await prisma.emprunt.findMany({
    where: { idAdherent: userId },
    include: { livre: true }
  });
  res.json(emprunts);
});

// 6) Liste de toutes les commandes de tous les utilisateurs
// GET /commandes
app.get('/commandes', async (req, res) => {
  const commandes = await prisma.commande.findMany({
    include: {
      livre: true,
      adherent: { select: { idAdherent: true, nom: true } }
    }
  });
  res.json(commandes);
});

// 7) Liste de tous les emprunts de tous les utilisateurs
// GET /emprunts
app.get('/emprunts', async (req, res) => {
  const emprunts = await prisma.emprunt.findMany({
    include: {
      livre: true,
      adherent: {
        select: {
          idAdherent: true,
          nom: true,
        }
      }
    }
  });
  res.json(emprunts);
});

app.listen(3001, () => {
  console.log('Backend is running at http://localhost:3001');
});
