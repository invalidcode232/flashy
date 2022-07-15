import client from '../client';
import { AnswerData } from '../types/types';

class Flashcard {
    static async save(
        question: string,
        collectionId: number,
        is_multiple: boolean,
        answers: AnswerData[],
    ) {
        const flashcard = await client.flashcards.create({
            data: {
                question: question,
                collection_id: collectionId,
                is_multiple: is_multiple,
            },
        });

        answers.forEach(async (answer) => {
            await client.flashcard_answers.create({
                data: {
                    ...answer,
                    flashcard_id: flashcard.id,
                },
            });
        });

        return flashcard;
    }

    static async get() {
        const flashcards = await client.flashcards.findMany();

        return flashcards;
    }

    static async findById(id: number) {
        const flashcard = await client.flashcards.findFirst({
            where: {
                id: id,
            },
        });

        const answers = await client.flashcard_answers.findMany({
            where: {
                flashcard_id: id,
            },
        });

        if (!flashcard || !answers) {
            return null;
        }

        const res = {
            ...flashcard,
            answers: answers,
        };

        return res;
    }

    static async delete(id: number) {
        const flashcard = await client.flashcards.delete({
            where: {
                id: id,
            },
        });

        await client.flashcard_answers.deleteMany({
            where: {
                flashcard_id: id,
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
