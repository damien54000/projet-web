import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function resetContactMessage() {
  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE "ContactMessage" RESTART IDENTITY CASCADE;
  `);
  console.log("✅ Table vidée et ID réinitialisé à 1");
  await prisma.$disconnect();
}

resetContactMessage();