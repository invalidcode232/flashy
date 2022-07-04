import { users, collections, flashcards } from '@prisma/client';

interface AnswerData {
    is_multiple: boolean;
    answer: string;
    wrong_answer_1?: string;
    wrong_answer_2?: string;
    wrong_answer_3?: string;
    wrong_answer_4?: string;
}

export type { AnswerData, users, collections, flashcards };
