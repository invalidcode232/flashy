import { useReducer } from 'react';
import { ChoiceData, FlashcardData } from '../types/types';

const INITIAL_STATE: FlashcardData[] = [];

enum ACTION_EVENTS {
    ADD_FLASHCARD,
    DELETE_FLASHCARD,
    EDIT_FLASHCARD,
    SET_FLASHCARDS,
    UPDATE_ANSWER,
}

type Action =
    | { type: ACTION_EVENTS.SET_FLASHCARDS; payload: FlashcardData[] }
    | { type: ACTION_EVENTS.ADD_FLASHCARD; payload: FlashcardData }
    | { type: ACTION_EVENTS.DELETE_FLASHCARD; payload: FlashcardData }
    | { type: ACTION_EVENTS.EDIT_FLASHCARD; payload: FlashcardData }
    | {
          type: ACTION_EVENTS.UPDATE_ANSWER;
          payload: { id: number; choice: ChoiceData[] };
      };

const reducer = (state: FlashcardData[], action: Action): FlashcardData[] => {
    switch (action.type) {
        case ACTION_EVENTS.SET_FLASHCARDS:
            return action.payload;
        case ACTION_EVENTS.ADD_FLASHCARD:
            return [...state, action.payload];
        case ACTION_EVENTS.DELETE_FLASHCARD:
            return state.filter(
                (flashcard) => flashcard.id !== action.payload.id,
            );
        case ACTION_EVENTS.UPDATE_ANSWER:
            return state.map((flashcard) => {
                if (flashcard.id === action.payload.id) {
                    return {
                        ...flashcard,
                        choices: action.payload.choice,
                    };
                }

                return flashcard;
            });
        default:
            return state;
    }
};

const useFlashcardReducer = () => useReducer(reducer, INITIAL_STATE);
export { useFlashcardReducer, ACTION_EVENTS };
export type { Action };
