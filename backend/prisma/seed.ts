import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1) seed Book
  await prisma.book.createMany({
    data: [
      // --- Romance ---
      {
        title: "A Walk to Remember",
        genre: "Romance",
        author: "Nicholas Sparks",
      },
      { title: "Me Before You", genre: "Romance", author: "Jojo Moyes" },
      { title: "The Notebook", genre: "Romance", author: "Nicholas Sparks" },
      { title: "Delicacy", genre: "Romance", author: "David Foenkinos" },

      // --- Fiction ---
      {
        title: "Perfume: The Story of a Murderer",
        genre: "Fiction",
        author: "Patrick Süskind",
      },
      { title: "Shutter Island", genre: "Fiction", author: "Dennis Lehane" },
      { title: "The Road", genre: "Fiction", author: "Cormac McCarthy" },
      {
        title: "The Name of the Rose",
        genre: "Fiction",
        author: "Umberto Eco",
      },

      // --- Biographies ---
      { title: "Steve Jobs", genre: "Biographies", author: "Walter Isaacson" },
      { title: "Becoming", genre: "Biographies", author: "Michelle Obama" },
      { title: "Elon Musk", genre: "Biographies", author: "Ashlee Vance" },
      {
        title: "I Am Malala",
        genre: "Biographies",
        author: "Malala Yousafzai",
      },

      // --- Poetry ---
      { title: "The Drunken Boat", genre: "Poetry", author: "Arthur Rimbaud" },
      { title: "Paroles", genre: "Poetry", author: "Jacques Prévert" },
      { title: "The Dice Cup", genre: "Poetry", author: "Max Jacob" },

      // --- Comics ---
      {
        title: "Blake and Mortimer",
        genre: "Comics",
        author: "Edgar P. Jacobs",
      },
      { title: "Lucky Luke", genre: "Comics", author: "Morris" },
      { title: "The Smurfs", genre: "Comics", author: "Peyo" },
      { title: "Garfield", genre: "Comics", author: "Jim Davis" },

      // --- Cooking ---
      { title: "Home Made", genre: "Cooking", author: "Cyril Lignac" },
      {
        title: "Vegetarian Cooking",
        genre: "Cooking",
        author: "Delphine Pocard",
      },
      { title: "Patisserie!", genre: "Cooking", author: "Christophe Felder" },
      {
        title: "Cooking for Dummies",
        genre: "Cooking",
        author: "Bryan Miller",
      },

      // --- History ---
      { title: "The Art of War", genre: "History", author: "Sun Tzu" },
      {
        title: "Great Dates in French History",
        genre: "History",
        author: "André Castelot",
      },
      { title: "Napoleon", genre: "History", author: "André Castelot" },
      {
        title: "The Second World War",
        genre: "History",
        author: "Winston Churchill",
      },

      // --- Mixed (existing) ---
      {
        title: "The Little Prince",
        genre: "Fiction",
        author: "Antoine de Saint-Exupéry",
      },
      {
        title: "The Lord of the Rings",
        genre: "Fiction",
        author: "J.R.R. Tolkien",
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        genre: "Fiction",
        author: "J.K. Rowling",
      },
      { title: "Dune", genre: "Fiction", author: "Frank Herbert" },
      {
        title: "Crime and Punishment",
        genre: "Fiction",
        author: "Fyodor Dostoevsky",
      },
      { title: "Les Misérables", genre: "Fiction", author: "Victor Hugo" },
      { title: "The Hobbit", genre: "Fiction", author: "J.R.R. Tolkien" },
      { title: "Frankenstein", genre: "Fiction", author: "Mary Shelley" },
      {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        author: "Harper Lee",
      },
      {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        author: "J. D. Salinger",
      },
      { title: "Go Set a Watchman", genre: "Fiction", author: "Harper Lee" },
      { title: "Fahrenheit 451", genre: "Fiction", author: "Ray Bradbury" },
    ],
  });

  // 2) seed Member
  await prisma.member.createMany({
    data: [
      {
        name: "Smith",
        street: "Flower Street",
        streetNumber: "12",
        city: "Montreal",
        zipCode: "H2X1Y4",
      },
      {
        name: "Martin",
        street: "St-Laurent Blvd",
        streetNumber: "345",
        city: "Montreal",
        zipCode: "H2X3T1",
      },
      {
        name: "Johnson",
        street: "Park Avenue",
        streetNumber: "78",
        city: "Quebec",
        zipCode: "G1R2L9",
      },
      {
        name: "King",
        street: "St-Catherine Street",
        streetNumber: "210",
        city: "Montreal",
        zipCode: "H3B1A7",
      },
      {
        name: "Wilson",
        street: "King's Road",
        streetNumber: "5",
        city: "Trois-Rivieres",
        zipCode: "G9A1P4",
      },
      {
        name: "Miller",
        street: "Notre-Dame Street",
        streetNumber: "99",
        city: "Laval",
        zipCode: "H7N5P1",
      },
      {
        name: "Taylor",
        street: "Main Street",
        streetNumber: "150",
        city: "Quebec",
        zipCode: "G1V4L2",
      },
      {
        name: "Anderson",
        street: "Victoria Street",
        streetNumber: "22",
        city: "Montreal",
        zipCode: "H2Y2E2",
      },
      {
        name: "Thomas",
        street: "Taschereau Blvd",
        streetNumber: "310",
        city: "Longueuil",
        zipCode: "J4L2Z8",
      },
      {
        name: "White",
        street: "Wellington Street",
        streetNumber: "47",
        city: "Sherbrooke",
        zipCode: "J1H2E8",
      },
      {
        name: "Moore",
        street: "St-John Street",
        streetNumber: "88",
        city: "Quebec",
        zipCode: "G1R1P7",
      },
      {
        name: "Clark",
        street: "Commune Street",
        streetNumber: "60",
        city: "Montreal",
        zipCode: "H2Y2E3",
      },
    ],
  });

  // 3) seed Loan
  await prisma.loan.createMany({
    data: [
      {
        bookId: 1,
        memberId: 1,
        loanDate: new Date("2025-01-01"),
        dueDate: new Date("2025-01-15"),
      },
      {
        bookId: 2,
        memberId: 1,
        loanDate: new Date("2025-01-10"),
        dueDate: new Date("2025-01-24"),
      },
      {
        bookId: 3,
        memberId: 1,
        loanDate: new Date("2025-02-01"),
        dueDate: new Date("2025-02-15"),
      },
      {
        bookId: 4,
        memberId: 1,
        loanDate: new Date("2025-02-20"),
        dueDate: new Date("2025-03-06"),
      },
      {
        bookId: 5,
        memberId: 1,
        loanDate: new Date("2025-03-10"),
        dueDate: new Date("2025-03-24"),
      },

      {
        bookId: 6,
        memberId: 2,
        loanDate: new Date("2025-01-05"),
        dueDate: new Date("2025-01-19"),
      },
      {
        bookId: 7,
        memberId: 2,
        loanDate: new Date("2025-01-15"),
        dueDate: new Date("2025-01-29"),
      },
      {
        bookId: 8,
        memberId: 2,
        loanDate: new Date("2025-02-05"),
        dueDate: new Date("2025-02-19"),
      },
      {
        bookId: 9,
        memberId: 2,
        loanDate: new Date("2025-02-15"),
        dueDate: new Date("2025-03-01"),
      },
      {
        bookId: 10,
        memberId: 2,
        loanDate: new Date("2025-03-01"),
        dueDate: new Date("2025-03-15"),
      },
      {
        bookId: 11,
        memberId: 2,
        loanDate: new Date("2025-03-15"),
        dueDate: new Date("2025-03-29"),
      },
      {
        bookId: 12,
        memberId: 2,
        loanDate: new Date("2025-04-01"),
        dueDate: new Date("2025-04-15"),
      },
      {
        bookId: 1,
        memberId: 2,
        loanDate: new Date("2025-04-10"),
        dueDate: new Date("2025-04-24"),
      },

      {
        bookId: 2,
        memberId: 3,
        loanDate: new Date("2025-01-12"),
        dueDate: new Date("2025-01-26"),
      },
      {
        bookId: 4,
        memberId: 3,
        loanDate: new Date("2025-02-10"),
        dueDate: new Date("2025-02-24"),
      },
      {
        bookId: 6,
        memberId: 3,
        loanDate: new Date("2025-03-05"),
        dueDate: new Date("2025-03-19"),
      },
      {
        bookId: 8,
        memberId: 3,
        loanDate: new Date("2025-03-20"),
        dueDate: new Date("2025-04-03"),
      },

      {
        bookId: 3,
        memberId: 4,
        loanDate: new Date("2025-01-20"),
        dueDate: new Date("2025-02-03"),
      },
      {
        bookId: 5,
        memberId: 4,
        loanDate: new Date("2025-02-01"),
        dueDate: new Date("2025-02-15"),
      },
      {
        bookId: 7,
        memberId: 4,
        loanDate: new Date("2025-02-18"),
        dueDate: new Date("2025-03-04"),
      },
      {
        bookId: 9,
        memberId: 4,
        loanDate: new Date("2025-03-01"),
        dueDate: new Date("2025-03-15"),
      },
      {
        bookId: 11,
        memberId: 4,
        loanDate: new Date("2025-03-15"),
        dueDate: new Date("2025-03-29"),
      },
      {
        bookId: 2,
        memberId: 4,
        loanDate: new Date("2025-04-05"),
        dueDate: new Date("2025-04-19"),
      },

      {
        bookId: 10,
        memberId: 5,
        loanDate: new Date("2025-02-12"),
        dueDate: new Date("2025-02-26"),
      },
      {
        bookId: 12,
        memberId: 5,
        loanDate: new Date("2025-03-10"),
        dueDate: new Date("2025-03-24"),
      },
      {
        bookId: 1,
        memberId: 5,
        loanDate: new Date("2025-03-25"),
        dueDate: new Date("2025-04-08"),
      },

      {
        bookId: 5,
        memberId: 3,
        loanDate: new Date("2025-04-01"),
        dueDate: new Date("2025-04-15"),
      },
      {
        bookId: 8,
        memberId: 1,
        loanDate: new Date("2025-04-10"),
        dueDate: new Date("2025-04-24"),
      },
      {
        bookId: 3,
        memberId: 2,
        loanDate: new Date("2025-04-12"),
        dueDate: new Date("2025-04-26"),
      },
    ],
  });

  // 4) seed Order
  await prisma.order.createMany({
    data: [
      {
        bookId: 1,
        memberId: 1,
        orderDate: new Date("2025-01-05"),
        status: "Shipped",
      },
      {
        bookId: 2,
        memberId: 1,
        orderDate: new Date("2025-01-15"),
        status: "Delivered",
      },
      {
        bookId: 3,
        memberId: 2,
        orderDate: new Date("2025-02-01"),
        status: "Pending",
      },
      {
        bookId: 4,
        memberId: 3,
        orderDate: new Date("2025-02-10"),
        status: "Cancelled",
      },
      {
        bookId: 5,
        memberId: 4,
        orderDate: new Date("2025-02-20"),
        status: "Shipped",
      },
      {
        bookId: 6,
        memberId: 5,
        orderDate: new Date("2025-03-01"),
        status: "Delivered",
      },
      {
        bookId: 7,
        memberId: 6,
        orderDate: new Date("2025-03-10"),
        status: "Shipped",
      },
      {
        bookId: 8,
        memberId: 7,
        orderDate: new Date("2025-03-15"),
        status: "Pending",
      },
      {
        bookId: 9,
        memberId: 8,
        orderDate: new Date("2025-03-22"),
        status: "Delivered",
      },
      {
        bookId: 10,
        memberId: 9,
        orderDate: new Date("2025-03-25"),
        status: "Shipped",
      },
      {
        bookId: 11,
        memberId: 10,
        orderDate: new Date("2025-03-27"),
        status: "Cancelled",
      },
      {
        bookId: 12,
        memberId: 11,
        orderDate: new Date("2025-03-29"),
        status: "Delivered",
      },

      {
        bookId: 1,
        memberId: 2,
        orderDate: new Date("2025-04-01"),
        status: "Pending",
      },
      {
        bookId: 5,
        memberId: 3,
        orderDate: new Date("2025-04-05"),
        status: "Shipped",
      },
      {
        bookId: 2,
        memberId: 4,
        orderDate: new Date("2025-04-10"),
        status: "Delivered",
      },
      {
        bookId: 3,
        memberId: 5,
        orderDate: new Date("2025-04-12"),
        status: "Pending",
      },
      {
        bookId: 7,
        memberId: 6,
        orderDate: new Date("2025-04-15"),
        status: "Shipped",
      },
      {
        bookId: 8,
        memberId: 7,
        orderDate: new Date("2025-04-18"),
        status: "Delivered",
      },
      {
        bookId: 9,
        memberId: 8,
        orderDate: new Date("2025-04-20"),
        status: "Shipped",
      },
    ],
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
