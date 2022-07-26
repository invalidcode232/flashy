import client from '../client';
import { ChoiceData, FlashcardData } from '../types/types';

class Flashcard {
    static async save(
        question: string,
        collectionId: number,
        is_multiple: boolean,
        choices: ChoiceData[],
    ) {
        const flashcardMeta = await client.flashcards.create({
            data: {
                question: question,
                collection_id: collectionId,
                is_multiple: is_multiple,
            },
        });

        const choiceData = [];
        for (const choice of choices) {
            const choiceRes = await client.flashcard_choices.create({
                data: {
                    flashcard_id: flashcardMeta.id,
                    choice: choice.choice,
                    is_correct: choice.is_correct,
                },
            });

            choiceData.push(choiceRes);
        }

        const flashcardData: FlashcardData = {
            ...flashcardMeta,
            choices: choiceData,
        };

        return flashcardData;
    }

    static async get() {
        return await client.flashcards.findMany();
    }

    static async findById(id: number) {
        return await client.flashcards.findFirst({
            where: {
                id: id,
            },
            include: {
                choices: true,
            },
        });
    }

    static async delete(id: number) {
        return await client.flashcards.delete({
            where: {
                id: id,
            },
            include: {
                choices: true,
            },
        });
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
