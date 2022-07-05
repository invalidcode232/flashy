import { NextApiRequest, NextApiResponse } from 'next';
import Flashcard from '../../../../repos/flashcard-repo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { flashcardId } = req.query;

    Flashcard.delete(parseInt(flashcardId as string))
        .then((collectionData) => {
            if (!collectionData) {
                return res.status(404).json({ message: 'Flashcard not found' });
            }

            res.status(200).send(JSON.stringify(collectionData));
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}
