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
    static async save(name: string, userId: string) {
        return await client.collections.create({
            data: {
                name: name,
                userId: userId,
            },
        });
    }

    static async findByUser(userId: string) {
        return await client.collections.findMany({
            where: {
                userId: userId,
            },
        });
    }

    static async findById(id: number) {
        return await client.collections.findFirst({
            where: {
                id: id,
            },
        });
    }

    static async delete(id: number) {
        return await client.collections.delete({
            where: {
                id: id,
            },
        });
    }

    static async edit(id: number, name: string) {
        return await client.collections.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
    }
}

export default Collection;
