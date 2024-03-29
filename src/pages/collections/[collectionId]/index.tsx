import { collections } from '@prisma/client';
import camelcaseKeys from 'camelcase-keys';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Dispatch, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import CollectionInfo from '../../../components/Collections/CollectionInfo';
import CollectionPlayCard from '../../../components/Collections/CollectionPlayCard';
import FlashcardCard from '../../../components/Flashcards/FlashcardCard';
import FlashcardDataModal from '../../../components/Modals/FlashcardDataModal';
import Layout from '../../../layouts/Dashboard/Layout';
import {
    Action,
    ACTION_EVENTS,
    useFlashcardReducer,
} from '../../../reducers/flashcard-reducer';
import { ChoiceData, FlashcardData } from '../../../types/types';

const mapDispatch = (dispatch: Dispatch<Action>) => {
    return {
        setFlashcards: (flashcards: FlashcardData[]) =>
            dispatch({
                type: ACTION_EVENTS.SET_FLASHCARDS,
                payload: flashcards,
            }),
        addFlashcard: (flashcard: FlashcardData) =>
            dispatch({ type: ACTION_EVENTS.ADD_FLASHCARD, payload: flashcard }),
        deleteFlashcard: (flashcard: FlashcardData) =>
            dispatch({
                type: ACTION_EVENTS.DELETE_FLASHCARD,
                payload: flashcard,
            }),
        updateChoice: (id: number, choice: ChoiceData[]) =>
            dispatch({
                type: ACTION_EVENTS.UPDATE_ANSWER,
                payload: { id, choice },
            }),
    };
};

const Collection: NextPage = () => {
    const [newFlashcardModal, setNewFlashcardModal] = useState(false);

    const router = useRouter();
    const { collectionId } = router.query;

    const [collection, setCollection] = useState<collections | undefined>(
        undefined,
    );

    const [flashcardState, flashcardDispatcher] = useFlashcardReducer();
    const actions = mapDispatch(flashcardDispatcher);

    const addFlashcardHandler = async (flashcard: FlashcardData) => {
        await fetch(`/api/flashcards/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(flashcard),
        });

        actions.addFlashcard(flashcard);
        setNewFlashcardModal(false);
    };

    useEffect(() => {
        if (collectionId) {
            // fetch collection data
            fetch(`/api/collections/${collectionId?.toString()}`).then(
                async (response) => {
                    const data = await response.json();
                    setCollection(data);
                },
            );

            // fetch all flashcards in the collection
            fetch(
                `/api/collections/${collectionId?.toString()}/flashcards`,
            ).then(async (response) => {
                const data: FlashcardData[] = await response.json();
                flashcardDispatcher({
                    type: ACTION_EVENTS.SET_FLASHCARDS,
                    payload: camelcaseKeys(data, { deep: true }),
                });

                // this will cause an infinite loop so we wont use it
                // actions.setFlashcards(data);
            });
        }
    }, [collectionId, flashcardDispatcher]);

    return (
        <Layout>
            {collectionId && (
                <FlashcardDataModal
                    isOpen={newFlashcardModal}
                    onClose={() => setNewFlashcardModal(false)}
                    collectionId={parseInt(collectionId as string)}
                    submitHandler={addFlashcardHandler}
                />
            )}

            <h1 className="text-3xl font-bold mb-5">{collection?.name}</h1>

            <CollectionInfo info={'Flashcard count'} value={'10'} />
            <CollectionInfo info={'Date modified'} value={'2021/02/15'} />
            <CollectionInfo info={'Date created'} value={'2021/02/15'} />

            {collectionId && (
                <>
                    <CollectionPlayCard
                        header="Play collection"
                        collectionId={collectionId as string}
                    >
                        You have <strong>10</strong> flashcards in schedule.
                    </CollectionPlayCard>
                    <CollectionPlayCard
                        header="Play all flashcards"
                        collectionId={collectionId as string}
                    >
                        Play all <strong>52</strong> flashcards in this
                        collection.
                    </CollectionPlayCard>
                </>
            )}

            <div className="flex justify-between mt-6 mb-3">
                <h1 className="text-2xl mb-5 font-semibold">Flashcards</h1>

                <button
                    className={
                        'bg-white px-5 mr-5 py-1 text-xl border-2 border-blue-500 text-blue-500 hover:cursor-pointer rounded-md hover:bg-blue-500 hover:border-white hover:text-white'
                    }
                    onClick={() => setNewFlashcardModal(true)}
                >
                    <FaPlus />
                </button>
            </div>

            {flashcardState.map((flashcard) => (
                <FlashcardCard
                    key={flashcard?.id}
                    flashcard={flashcard}
                    deleteFlashcardState={actions.deleteFlashcard}
                    editFlashcardState={actions.updateChoice}
                />
            ))}
        </Layout>
    );
};

export default Collection;
