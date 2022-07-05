import { NextApiRequest, NextApiResponse } from 'next';
import Collection from '../../../../repos/collection-repo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { collectionId } = req.query;

    Collection.findById(parseInt(collectionId as string))
        .then((collectionData) => {
            if (!collectionData) {
                return res
                    .status(404)
                    .json({ message: 'Collection not found' });
            }

            res.status(200).send(JSON.stringify(collectionData));
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}
