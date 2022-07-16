import React from 'react';
import { CollectionContextType } from '../types/types';

const CollectionContext = React.createContext<
    CollectionContextType | undefined
>(undefined);

export default CollectionContext;
