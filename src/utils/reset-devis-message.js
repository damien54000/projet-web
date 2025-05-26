import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function resetDevisMessage() {
  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE "DevisMessage" RESTART IDENTITY CASCADE;
  `);
  console.log("Table vidée");
  await prisma.$disconnect();
}

resetDevisMessage();