import { PrismaClient } from "@prisma/client";

/* Single Prisma instance, reused across hot-reloads in dev. */
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const dummyUrl = "postgresql://postgres:postgres@localhost:5432/postgres";

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL || dummyUrl,
      },
    },
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
