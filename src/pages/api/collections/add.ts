import { NextApiRequest, NextApiResponse } from 'next';
import Collection from '../../../repos/collection-repo';
import { getSession } from 'next-auth/react';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'POST') {
        const { name } = req.body;

        const session = await getSession({ req });

        if (!session || !session.user) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        const data = await Collection.save(name, session.user.id);

        res.status(200).send(data);
    } else {
        res.status(405).send('Method not allowed');
    }
}
