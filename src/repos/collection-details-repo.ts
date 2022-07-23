import client from '../client';

class CollectionDetails {
    static async findById(collection_id: number) {
        return await client.flashcards.findMany({
            where: {
                collection_id,
            },
            include: {
                choices: true,
            },
        });
    }
}

export default CollectionDetails;
