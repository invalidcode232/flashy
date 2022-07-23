import { NextApiRequest, NextApiResponse } from 'next';
import CollectionDetails from '../../../../../repos/collection-details-repo';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { collectionId } = req.query;

    const data = await CollectionDetails.findById(
        parseInt(collectionId as string),
    );

    if (!data) {
        return res.status(404).json({ message: 'Not found' });
    }

    res.status(200).send(data);
}
