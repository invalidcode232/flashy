import { collections, flashcards } from '@prisma/client';

interface AnswerData {
    answer: string;
    is_correct: boolean;
}

// interface CollectionState {
//     collections: collections[];
// }

// interface CollectionState extends Array<collections> {}

interface CollectionContextType {
    collections: collections[];
    addCollection: (collection: collections) => void;
}

export type { AnswerData, collections, flashcards, CollectionContextType };
// export default CollectionState;
