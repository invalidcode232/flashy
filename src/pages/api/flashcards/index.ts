import { NextApiRequest, NextApiResponse } from 'next';
import Flashcard from '../../../repos/flashcard-repo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    Flashcard.get().then((flashcards) => {
        res.status(200).send(flashcards);
    });
}
