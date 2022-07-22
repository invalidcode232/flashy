import client from '../client';
import { ChoiceData } from '../types/types';

class Flashcard {
    static async save(
        question: string,
        collectionId: number,
        is_multiple: boolean,
        choices: ChoiceData[],
    ) {
        const flashcard = await client.flashcards.create({
            data: {
                question: question,
                collection_id: collectionId,
                is_multiple: is_multiple,
            },
        });

        for (const choice of choices) {
            await client.flashcard_answers.create({
                data: {
                    flashcard_id: flashcard.id,
                    answer: choice.choice,
                    is_correct: choice.is_correct,
                },
            });
        }

        return flashcard;
    }

    static async get() {
        return await client.flashcards.findMany();
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

        return {
            ...flashcard,
            answers: answers,
        };
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

    static async edit(id: number, question: string, answerData: ChoiceData) {
        return await client.flashcards.update({
            where: {
                id: id,
            },
            data: {
                question: question,
                ...answerData,
            },
        });
    }
}

export default Flashcard;
