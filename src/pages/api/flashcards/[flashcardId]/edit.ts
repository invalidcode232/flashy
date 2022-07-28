import { NextApiRequest, NextApiResponse } from 'next';
import Flashcard from '../../../../repos/flashcard-repo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { flashcardId } = req.query;
        const { choices } = req.body;

        Flashcard.edit(parseInt(flashcardId as string), choices)
            .then((editResult) => {
                return res.status(200).send(editResult);
            })
            .catch((err) => {
                return res.status(500).send(err);
            });
        // res.status(200).send('ok');
    } else {
        res.status(405).send('Method not allowed');
    }
}
