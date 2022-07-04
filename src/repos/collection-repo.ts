import client from '../client';
import { collections } from '../types/types';

// class Collection {
//     name;
//     id?: number;

//     constructor(name: string) {
//         this.name = name;
//         this.id = undefined;
//     }

//     async save() {
//         const collection = await client.collections.create({
//             data: {
//                 name: this.name,
//             },
//         });

//         return collection;
//     }

//     static async findById(id: number) {
//         const collection = await client.collections.findFirst({
//             where: {
//                 id: id,
//             },
//         });

//         if (collection) {
//             return new Collection(collection.name);
//         }

//         return null;
//     }
// }

class Collection {
    name?: string;
    id?: number;
    data?: collections;

    constructor(name?: string, id?: number) {
        this.name = name;
        this.id = id;
    }

    async save() {
        if (!this.name) {
            throw new Error('Invalid name');
        }

        const createdCollection = await client.collections.create({
            data: {
                name: this.name,
            },
        });

        this.data = createdCollection;

        return this;
    }
}

export default Collection;
