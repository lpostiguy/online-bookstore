# 🚀 Projet Fullstack React + Express + SQLite

Ce projet est une application fullstack avec :

- 🎨 Frontend : React + TypeScript
- 🔙 Backend : Express.js + TypeScript
- 🗄️ Base de données : SQLite avec Prisma ORM

---

## 🛠️ Prérequis

- Node.js (version LTS recommandée)
- npm (inclus avec Node)
- Git
- (optionnel) VS Code

---

## 📦 Installation manuelle

1. Cloner le dépôt :

```bash
git clone https://github.com/votre-nom/projet-fullstack.git
cd projet-fullstack
```

2. Installer les dépendances :

```bash
cd backend
npm install
cp .env.example .env
npx prisma migrate dev --name init

cd ../frontend
npm install
```

---

## ⚡ Lancement

Dans un terminal :

```bash
cd backend
npm run dev
```

Dans un autre terminal :

```bash
cd frontend
npm start
```

---

## ⚙️ Script automatique

### Pour Windows

```bash
setup.bat
```

### Pour Linux ou macOS

```bash
chmod +x setup.sh
./setup.sh
```

---

## 🌐 Accès

- Frontend : [http://localhost:3000](http://localhost:3000)
- API backend : [http://localhost:3001/api](http://localhost:3001/api)

---

## 📁 Structure du projet

```
projet-fullstack/
├── backend/
│   ├── src/
│   ├── prisma/
│   ├── .env.example
│   └── package.json
├── frontend/
├── ├── src/
│   └── package.json
├── setup.sh
├── setup.bat
└── README.md
```

---

## 📬 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou me contacter directement.
