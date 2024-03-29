import { NextApiRequest, NextApiResponse } from 'next';
import Flashcard from '../../../../repos/flashcard-repo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { flashcardId } = req.query;

    Flashcard.findById(parseInt(flashcardId as string))
        .then((flashcardData) => {
            if (!flashcardData) {
                return res.status(404).json({ message: 'Flashcard not found' });
            }

            res.status(200).send(JSON.stringify(flashcardData));
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}
