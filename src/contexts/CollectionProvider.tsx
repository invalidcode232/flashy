import React, { useEffect, useReducer } from 'react';
import { CollectionContextType, collections } from '../types/types';
import CollectionContext from './CollectionContext';

type Props = {
    children: React.ReactNode;
};

enum COLLECTION_EVENTS {
    SET_DEFAULT_STATE,
    ADD_COLLECTION,
    REMOVE_COLLECTION,
}

type Action =
    | { type: COLLECTION_EVENTS.ADD_COLLECTION; payload: collections }
    | { type: COLLECTION_EVENTS.REMOVE_COLLECTION; payload: collections }
    | { type: COLLECTION_EVENTS.SET_DEFAULT_STATE; payload: collections[] };

const collectionReducer = (
    state: collections[],
    action: Action,
): collections[] => {
    switch (action.type) {
        case COLLECTION_EVENTS.ADD_COLLECTION:
            return [...state, action.payload];
        case COLLECTION_EVENTS.SET_DEFAULT_STATE:
            return action.payload;
        case COLLECTION_EVENTS.REMOVE_COLLECTION:
            return state.filter(
                (collection: collections) =>
                    collection.id !== action.payload.id,
            );
        default:
            return state;
    }
};

const CollectionProvider = (props: Props) => {
    const [collections, collectionDispatch] = useReducer(collectionReducer, []);

    useEffect(() => {
        fetch('/api/collections').then(async (response) => {
            const collections = await response.json();
            collectionDispatch({
                type: COLLECTION_EVENTS.SET_DEFAULT_STATE,
                payload: collections,
            });
        });
    }, []);

    const addCollection = (collection: collections) => {
        collectionDispatch({
            type: COLLECTION_EVENTS.ADD_COLLECTION,
            payload: collection,
        });
    };

    const FlashyProvider: CollectionContextType = {
        collections,
        addCollection,
    };

    return (
        <CollectionContext.Provider value={FlashyProvider}>
            {props.children}
        </CollectionContext.Provider>
    );
};

export default CollectionProvider;
