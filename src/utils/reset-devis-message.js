//Script : resetDevisMessage
//Vide la table DevisMessage et réinitalise les ID

//Import externe
import { PrismaClient } from "@prisma/client";

//Initialisation du client Prisma
const prisma = new PrismaClient();

//Fonction asynchrone de réinitialisation
async function resetDevisMessage() {
  // Supprime tous les enregistrements et réinitialise l'identifiant auto-incrémenté
  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE "DevisMessage" RESTART IDENTITY CASCADE;
  `);
  console.log("Table vidée");
  await prisma.$disconnect();
}

resetDevisMessage();