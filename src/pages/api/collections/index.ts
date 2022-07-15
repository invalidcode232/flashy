import { NextApiRequest, NextApiResponse } from 'next';
import Collection from '../../../repos/collection-repo';
import { getSession } from 'next-auth/react';
import Flashcard from '../../../repos/flashcard-repo';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const session = await getSession({ req });

    if (!session || !session.user) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    const data = await Collection.findByUser(session.user.id);

    if (!data) {
        res.status(404).json({ message: 'Not found' });
        return;
    }

    res.status(200).send(data);
}
