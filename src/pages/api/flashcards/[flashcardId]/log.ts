import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import Flashcard from '../../../../repos/flashcard-repo';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const session = await getSession({ req });

    if (!session || !session.user) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    const { flashcardId, isCorrect } = req.body;

    if (!flashcardId || !isCorrect) {
        res.status(400).json({ message: 'Bad request' });
        return;
    }

    Flashcard.log(
        session.user.id,
        parseInt(flashcardId as string),
        isCorrect === 'true',
    );
}
