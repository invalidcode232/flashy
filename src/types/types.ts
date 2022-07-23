import { collections, flashcards } from '@prisma/client';

interface ChoiceData {
    choice: string;
    is_correct: boolean;
}

// interface CollectionState {
//     collections: collections[];
// }

// interface CollectionState extends Array<collections> {}

type FlashcardData = {
    id?: number;
    question: string;
    collection_id: number;
    is_multiple: boolean;
    choices: ChoiceData[];
};

interface CollectionContextType {
    collections: collections[];
    addCollection: (collection: collections) => void;
}

export type {
    ChoiceData,
    collections,
    flashcards,
    CollectionContextType,
    FlashcardData,
};
// export default CollectionState;
