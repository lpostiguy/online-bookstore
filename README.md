# Online BookStore Web App

## 🔗 Live Demo
You can preview the project, hosted here: [online-bookstore.vercel.app](https://online-bookstore-jyzs.vercel.app/)

<img width="3038" height="1626" alt="Online_book_store" src="https://github.com/user-attachments/assets/db6537e3-fd86-4bd3-80ca-c53862802197" />

This project is a fullstack web application built with:

- 🎨 Frontend: React + TypeScript
- 🔙 Backend: Express.js + TypeScript
- 🗄️ Database: SQLite with Prisma ORM
https://online-bookstore-jyzs.vercel.app/
---

## 🛠️ Prerequisites

- Node.js (LTS version recommended)
- npm (included with Node.js)
- Git
- (optional) VS Code

---

## 📦 Manual Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/fullstack-project.git
cd fullstack-project
```

2. Install dependencies:

```bash
cd backend
npm install
cp .env.example .env
npx prisma migrate dev --name init
npx prisma db seed

cd ../frontend
npm install
```

---

## ⚡ Running the App

In one terminal:

```bash
cd backend
npm run dev
```

In another terminal:

```bash
cd frontend
npm start
```

---

## ⚙️ Automatic Setup Script

### For Windows

```bash
setup.bat
```

### For Linux or macOS

```bash
chmod +x setup.sh
./setup.sh
```

---

## 🌐 Access

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/api

---

## 📁 Project Structure

```
fullstack-project/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   └── index.ts
│   ├── prisma/
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   └── package.json
├── setup.sh
├── setup.bat
└── README.md
```

---

## 📬 Contact

For any questions or suggestions, feel free to open an issue or contact me directly.
