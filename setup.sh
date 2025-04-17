#!/bin/bash

echo "🚀 Installing backend dependencies..."
cd backend
npm install

echo "🛠️ Setting up .env file..."
cp .env.example .env

echo "🧱 Running database migration..."
npx prisma migrate dev --name init

cd ..

echo "🚀 Installing frontend dependencies..."
cd frontend
npm install

echo "✅ Setup complete! You can now run the servers:"
echo
echo "▶️ Backend: cd backend && npm run dev"
echo "▶️ Frontend: cd frontend && npm start"
