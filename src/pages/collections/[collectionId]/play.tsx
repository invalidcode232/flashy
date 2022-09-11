import camelcaseKeys from 'camelcase-keys';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FlashcardPlay from '../../../components/Flashcards/FlashcardPlay';
import Layout from '../../../layouts/Dashboard/Layout';
import { FlashcardData } from '../../../types/types';

const Dashboard: NextPage = () => {
    const router = useRouter();
    const { collectionId } = router.query;

    const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
    const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
    const [curFlashcardIndex, setCurFlashcardIndex] = useState(0);

    useEffect(() => {
        if (collectionId) {
            fetch(`/api/collections/${collectionId}/flashcards`)
                .then((res) => res.json())
                .then((flashcardData) => {
                    console.log(flashcardData);
                    setFlashcards(camelcaseKeys(flashcardData, { deep: true }));
                });
        }
    }, [collectionId]);

    const answerHandler = (answer: string) => {
        const curFlashcard = flashcards[curFlashcardIndex];

        const isCorrect = curFlashcard.isMultiple
            ? curFlashcard.choices[parseInt(answer)].isCorrect
            : answer === curFlashcard.answer;

        setIsCorrect(isCorrect);

        fetch(`/api/flashcards/${curFlashcard.id}/log`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                flashcardId: curFlashcard.id,
                isCorrect: isCorrect.toString(),
            }),
        });

        setCurFlashcardIndex((index) => (index += 1));
    };

    return (
        <Layout>
            {isCorrect !== undefined && (
                <div
                    className={`${
                        isCorrect ? 'bg-green-300' : 'bg-red-300'
                    } text-gray-700 rounded-lg py-2 px-4 w-3/4`}
                >
                    {isCorrect
                        ? 'Your answer was correct.'
                        : 'Your answer was incorrect.'}
                </div>
            )}

            {flashcards[curFlashcardIndex] && (
                <FlashcardPlay
                    flashcard={flashcards[curFlashcardIndex]}
                    answerHandler={answerHandler}
                />
            )}

            {curFlashcardIndex === flashcards.length && (
                <div className="text-center mt-3">
                    <p className="text-xl font-bold">
                        You have finished all the flashcards in this collection.
                    </p>
                </div>
            )}
        </Layout>
    );
};

export default Dashboard;
