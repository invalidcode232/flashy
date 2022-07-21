import { collections, flashcards } from '@prisma/client';

interface AnswerData {
    answer: string;
    is_correct: boolean;
}

// interface CollectionState {
//     collections: collections[];
// }

// interface CollectionState extends Array<collections> {}

type MultipleChoice = {
    id: number;
    choice: string;
    isCorrect: boolean;
};

interface flashcardFormInit {
    question: string;
    answerEssay: string;
    isMultiple: boolean;
    feedback: string;
}

interface CollectionContextType {
    collections: collections[];
    addCollection: (collection: collections) => void;
}

export type {
    AnswerData,
    collections,
    flashcards,
    MultipleChoice,
    flashcardFormInit,
};
// export default CollectionState;
