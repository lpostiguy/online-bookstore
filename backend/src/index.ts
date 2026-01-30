import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

// 1) Get the list of all books
// GET /books
app.get("/books", async (req, res) => {
  const books = await prisma.book.findMany();
  res.json(books);
});

// 2) Order a book
// POST /orders
app.post("/orders", async (req, res) => {
  const { userId, bookId } = req.body;
  const order = await prisma.order.create({
    data: {
      memberId: userId,
      bookId: bookId,
      orderDate: new Date(),
      status: "Pending", // Default status
    },
  });
  res.status(201).json(order);
});

// 3) View the list of my ordered books
// GET /my-orders?userId=...
app.get("/my-orders", async (req, res) => {
  const userId = Number(req.query.userId);
  const orders = await prisma.order.findMany({
    where: { memberId: userId },
    include: { book: true },
  });
  res.json(orders);
});

// 4) Borrow a book
// POST { userId: number, bookId: number }
app.post("/loans", async (req, res) => {
  const { userId, bookId } = req.body;

  const now = new Date();
  const dueDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000); // 14 days later

  const loan = await prisma.loan.create({
    data: {
      memberId: userId,
      bookId: bookId,
      loanDate: now,
      dueDate: dueDate,
    },
  });

  res.status(201).json(loan);
});

// 5) View the list of MY borrowed books
// GET /my-loans?userId=...
app.get("/my-loans", async (req, res) => {
  const userId = Number(req.query.userId);
  const loans = await prisma.loan.findMany({
    where: { memberId: userId },
    include: { book: true },
  });
  res.json(loans);
});

// 6) List of all orders from all users
// GET /orders
app.get("/orders", async (req, res) => {
  const orders = await prisma.order.findMany({
    include: {
      book: true,
      member: { select: { memberId: true, name: true } },
    },
  });
  res.json(orders);
});

// 7) List of all loans from all users
// GET /loans
app.get("/loans", async (req, res) => {
  const loans = await prisma.loan.findMany({
    include: {
      book: true,
      member: {
        select: {
          memberId: true,
          name: true,
        },
      },
    },
  });
  res.json(loans);
});

// 8) Stat: number of loans per book
// GET /stats/borrow-count-per-book
app.get("/stats/borrow-count-per-book", async (req, res) => {
  const stats = await prisma.book.findMany({
    select: {
      bookId: true,
      title: true,
      author: true,
      genre: true,
      _count: { select: { loans: true } },
    },
    orderBy: {
      loans: { _count: "desc" },
    },
  });

  // rename in JSON response
  const result = stats.map((b) => ({
    bookId: b.bookId,
    title: b.title,
    author: b.author,
    genre: b.genre,
    borrowCount: b._count.loans,
  }));

  res.json(result);
});

// 9) top 5 members with the most loans, with their name and loan count
// GET /stats/top-readers
app.get("/stats/top-readers", async (req, res) => {
  const topReaders = await prisma.member.findMany({
    select: {
      memberId: true,
      name: true,
      _count: { select: { loans: true } },
    },
    orderBy: {
      loans: { _count: "desc" },
    },
    take: 5,
  });

  const result = topReaders.map((m) => ({
    memberId: m.memberId,
    name: m.name,
    borrowCount: m._count.loans,
  }));

  res.json(result);
});

if (require.main === module) {
  app.listen(3001, () => {
    console.log("Backend is running at http://localhost:3001");
  });
}

export default app;
