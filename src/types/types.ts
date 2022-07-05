import { collections, flashcards } from '@prisma/client';

interface AnswerData {
    answer: string;
    is_correct: boolean;
}

export type { AnswerData, collections, flashcards };
