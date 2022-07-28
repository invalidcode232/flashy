import { collections, flashcards, flashcard_choices } from '@prisma/client';

interface ChoiceData {
    choice: string;
    isCorrect: boolean;
}

type FlashcardData = {
    id?: number;
    question: string;
    collectionId: number;
    isMultiple: boolean;
    feedback: string;
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
    flashcard_choices,
    CollectionContextType,
    FlashcardData,
};
// export default CollectionState;
