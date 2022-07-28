import client from '../client';
import { ChoiceData, FlashcardData } from '../types/types';
import camelcaseKeys from 'camelcase-keys';

class Flashcard {
    static async save(
        question: string,
        collectionId: number,
        isMultiple: boolean,
        choices: ChoiceData[],
    ) {
        const flashcardMeta = await client.flashcards.create({
            data: {
                question: question,
                collection_id: collectionId,
                is_multiple: isMultiple,
            },
        });

        const choiceData: ChoiceData[] = [];
        for (const choice of choices) {
            const choiceRes = await client.flashcard_choices.create({
                data: {
                    flashcard_id: flashcardMeta.id,
                    choice: choice.choice,
                    is_correct: choice.isCorrect,
                },
            });

            choiceData.push({
                choice: choiceRes.choice,
                isCorrect: choiceRes.is_correct,
            });
        }

        const flashcardData: FlashcardData = {
            ...(camelcaseKeys(flashcardMeta) as FlashcardData),
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

    static async edit(id: number, choices: ChoiceData[]) {
        await client.flashcard_choices.deleteMany({
            where: {
                flashcard_id: id,
            },
        });

        let choiceData = [];
        for (const choice in choices) {
            let data = await client.flashcard_choices.create({
                data: {
                    flashcard_id: id,
                    choice: choices[choice].choice,
                    is_correct: choices[choice].isCorrect,
                },
            });

            choiceData.push(data);
        }

        return choiceData;
    }
}

export default Flashcard;
