//Importation du client Prisma pour interagir avec la base données
import { PrismaClient } from "@prisma/client";

// Création d'un espace global pour stocker l'instace Prisma et éviter sa recréation en développement
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

//Utilise l'instance existante si elle est déjà définie, sinon en crée une nouvelle avec un log des requêtes
const prisma = globalForPrisma.prisma ?? new PrismaClient({ log: ["query"] });

//Stock l'instance Prisma dans l'objet global en environnement de développement
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
