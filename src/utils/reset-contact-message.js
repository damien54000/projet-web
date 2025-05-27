//Script : resetContactMessage
//Vide la table ContactMessage et réinitalise les ID

//Import externe
import { PrismaClient } from "@prisma/client";

//Initialisation du client Prisma
const prisma = new PrismaClient();

//Fonction asynchrone de réinitialisation
async function resetContactMessage() {
  // Supprime tous les enregistrements et réinitialise l'identifiant auto-incrémenté
  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE "ContactMessage" RESTART IDENTITY CASCADE;
  `);
  console.log("Table vidée");
  await prisma.$disconnect();
}

resetContactMessage();