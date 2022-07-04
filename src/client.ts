import { PrismaClient, users, collections, flashcards } from '@prisma/client';

const client = new PrismaClient();

export default client;
export type { users, collections, flashcards };
