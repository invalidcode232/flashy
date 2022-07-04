import { NextApiRequest, NextApiResponse } from 'next';
import Collection from '../../../repos/collection-repo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name } = req.body;

        new Collection(name)
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
