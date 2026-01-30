import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

// 1) Get the list of all books
app.get("/livres", async (req, res) => {
  const livres = await prisma.livre.findMany();
  res.json(livres);
});

// 2) Order a book
app.post("/commandes", async (req, res) => {
  const { userId, livreId } = req.body;
  const commande = await prisma.commande.create({
    data: {
      idAdherent: userId,
      idLivre: livreId,
      dateCommande: new Date(),
      etatCommande: "en attente",
    },
  });
  res.status(201).json(commande);
});

// 3) View the list of my ordered books
// GET /mes-commandes?userId= ..
app.get("/mes-commandes", async (req, res) => {
  const userId = Number(req.query.userId);
  const commandes = await prisma.commande.findMany({
    where: { idAdherent: userId },
    include: { livre: true },
  });
  res.json(commandes);
});

// 4) Borrow a book
// POST { userId: number, livreId: number }
app.post("/emprunts", async (req, res) => {
  const { userId, livreId } = req.body;

  const now = new Date();
  const retour = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

  const emprunt = await prisma.emprunt.create({
    data: {
      idAdherent: userId,
      idLivre: livreId,
      dateEmprunt: now,
      dateRetour: retour,
    },
  });

  res.status(201).json(emprunt);
});

// 5) View the list of MY borrowed books
// GET /mes-emprunts?userId=…
app.get("/mes-emprunts", async (req, res) => {
  const userId = Number(req.query.userId);
  const emprunts = await prisma.emprunt.findMany({
    where: { idAdherent: userId },
    include: { livre: true },
  });
  res.json(emprunts);
});

// 6) List of all orders from all users
// GET /commandes
app.get("/commandes", async (req, res) => {
  const commandes = await prisma.commande.findMany({
    include: {
      livre: true,
      adherent: { select: { idAdherent: true, nom: true } },
    },
  });
  res.json(commandes);
});

// 7) List of all loans from all users
// GET /emprunts
app.get("/emprunts", async (req, res) => {
  const emprunts = await prisma.emprunt.findMany({
    include: {
      livre: true,
      adherent: {
        select: {
          idAdherent: true,
          nom: true,
        },
      },
    },
  });
  res.json(emprunts);
});

// 8) Stat: number of loans per book
// GET /stats/borrow-count-per-book
app.get("/stats/borrow-count-per-book", async (req, res) => {
  const stats = await prisma.livre.findMany({
    select: {
      idLivre: true,
      titre: true,
      auteur: true,
      genre: true,
      _count: { select: { emprunts: true } },
    },
    orderBy: {
      emprunts: { _count: "desc" },
    },
  });

  // rename in JSON response
  const result = stats.map((b) => ({
    idLivre: b.idLivre,
    titre: b.titre,
    auteur: b.auteur,
    genre: b.genre,
    borrowCount: b._count.emprunts,
  }));

  res.json(result);
});

// 9) top 5 members with the most loans, with their name and loan count
// GET /stats/top-readers
app.get("/stats/top-readers", async (req, res) => {
  const topReaders = await prisma.adherent.findMany({
    select: {
      idAdherent: true,
      nom: true,
      _count: { select: { emprunts: true } },
    },
    orderBy: {
      emprunts: { _count: "desc" },
    },
    take: 5,
  });

  const result = topReaders.map((a) => ({
    idAdherent: a.idAdherent,
    nom: a.nom,
    borrowCount: a._count.emprunts,
  }));

  res.json(result);
});

if (require.main === module) {
  app.listen(3001, () => {
    console.log("Backend is running at http://localhost:3001");
  });
}

export default app;
