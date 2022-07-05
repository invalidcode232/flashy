import { AnswerData } from '../types/types';
import client from '../client';

class Flashcard {
    static async save(
        question: string,
        collectionId: number,
        answerData: AnswerData,
    ) {
        const flashcard = await client.flashcards.create({
            data: {
                question: question,
                collection_id: collectionId,
                ...answerData,
            },
        });

        return flashcard;
    }

    static async findById(id: number) {
        const flashcard = await client.flashcards.findFirst({
            where: {
                id: id,
            },
        });

        return flashcard;
    }

    static async delete(id: number) {
        const flashcard = await client.flashcards.delete({
            where: {
                id: id,
            },
        });

        return flashcard;
    }

    static async edit(id: number, question: string, answerData: AnswerData) {
        const flashcard = await client.flashcards.update({
            where: {
                id: id,
            },
            data: {
                question: question,
                ...answerData,
            },
        });

        return flashcard;
    }
}

export default Flashcard;
