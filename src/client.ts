import { PrismaClient, collections, flashcards } from '@prisma/client';

const client = new PrismaClient();

export default client;
export type { collections, flashcards };
