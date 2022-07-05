import client from '../client';

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
    static async save(name: string) {
        if (!this.name) {
            throw new Error('Invalid name');
        }

        const createdCollection = await client.collections.create({
            data: {
                name: this.name,
            },
        });

        return createdCollection;
    }

    static async findById(id: number) {
        const collection = await client.collections.findFirst({
            where: {
                id: id,
            },
        });

        return collection;
    }

    static async delete(id: number) {
        const collection = await client.collections.delete({
            where: {
                id: id,
            },
        });

        return collection;
    }

    static async edit(id: number, name: string) {
        const collection = await client.collections.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });

        return collection;
    }
}

export default Collection;
