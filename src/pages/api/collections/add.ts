import { NextApiRequest, NextApiResponse } from 'next';
import Collection from '../../../repos/collection-repo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name } = req.body;

        Collection.save(name)
            .then((createdCollection) => {
                res.status(200).send(createdCollection);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    } else {
        res.status(405).send('Method not allowed');
    }
}
