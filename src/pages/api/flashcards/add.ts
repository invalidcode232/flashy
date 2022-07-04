import { NextApiRequest, NextApiResponse } from 'next';
import Flashcard from '../../../repos/flashcard-repo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { question, collectionId, answerData } = req.body;

        const flashcard = new Flashcard(question, collectionId, answerData);
        flashcard
            .save()
            .then((create) => {
                res.status(200).send(create.data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    } else {
        res.status(405).send('Method not allowed');
    }
}
