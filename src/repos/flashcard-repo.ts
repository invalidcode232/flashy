import { AnswerData, flashcards } from '../types/types';
import client from '../client';

class Flashcard {
    question: string;
    collection_id: number;
    answerData: AnswerData;
    id?: number;
    data?: flashcards;

    constructor(question: string, collection_id: number, data: AnswerData) {
        this.question = question;
        this.collection_id = collection_id;
        this.answerData = data;
    }

    async save() {
        const flashcard = await client.flashcards.create({
            data: {
                question: this.question,
                collection_id: this.collection_id,
                ...this.answerData,
            },
        });

        this.data = flashcard;

        return this;
    }
}

export default Flashcard;
