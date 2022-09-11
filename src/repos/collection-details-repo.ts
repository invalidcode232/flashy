import client from '../client';

class CollectionDetails {
    static async findById(collection_id: number) {
        // const flashcards = await client.flashcards.findMany({
        //     where: {
        //         collection_id: collection_id,
        //     },
        //     include: {
        //         history: true,
        //         choices: true,
        //     },
        // });
        const flashcardsData = await client.$queryRaw`
            SELECT * FROM flashcards
            JOIN flashcard_history
            ON flashcards.id = flashcard_history.flashcard_id
            JOIN flashcard_choices
            ON flashcards.id = flashcard_choices.flashcard_id
            WHERE
                collection_id = ${collection_id}
                AND (
                    (
                        last_correct = true
                        AND CURRENT_TIMESTAMP > last_answered + interval '3 day'
                    )
                    OR
                    (
                        last_correct = false
                        AND CURRENT_TIMESTAMP > last_answered + interval '1 day'
                    )
                )
        `;

        const flashcards = [];

        flashcardsData.forEach((flashcard) => {
            console.log(flashcard);

            const flashcardIndex = flashcards.findIndex(
                (f) => f.id === flashcard.id,
            );

            if (flashcardIndex === -1) {
                flashcards.push({
                    id: flashcard.id,
                    question: flashcard.question,
                    answer: flashcard.answer,
                    is_multiple: flashcard.is_multiple,
                    history: [],
                    choices: [],
                });
            } else {
                flashcards[flashcardIndex].choices.push({
                    id: flashcard.id,
                    choice: flashcard.choice,
                });
            }
        });

        console.log(flashcards);

        return flashcards;
    }
}

export default CollectionDetails;
