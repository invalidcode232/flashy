import { NextApiRequest, NextApiResponse } from 'next';
import Flashcard from '../../../repos/flashcard-repo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { question, collectionId, isMultiple, choices } = req.body;

        Flashcard.save(question, collectionId, isMultiple, choices)
            .then((createdFlashcard) => {
                res.status(200).send(createdFlashcard);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    } else {
        res.status(405).send('Method not allowed');
    }
}
