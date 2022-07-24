import { useReducer } from 'react';
import { FlashcardData } from '../types/types';

const INITIAL_STATE: FlashcardData[] = [];

enum ACTION_EVENTS {
    ADD_FLASHCARD,
    DELETE_FLASHCARD,
    EDIT_FLASHCARD,
}

type Action =
    | { type: ACTION_EVENTS.ADD_FLASHCARD; payload: FlashcardData }
    | { type: ACTION_EVENTS.DELETE_FLASHCARD; payload: number }
    | { type: ACTION_EVENTS.EDIT_FLASHCARD; payload: FlashcardData };

const reducer = (state: FlashcardData[], action: Action): FlashcardData[] => {
    switch (action.type) {
        case ACTION_EVENTS.ADD_FLASHCARD:
            return state;
        default:
            return state;
    }
};

const useFlashcardReducer = () => useReducer(reducer, INITIAL_STATE);
export { useFlashcardReducer, ACTION_EVENTS };
export type { Action };
