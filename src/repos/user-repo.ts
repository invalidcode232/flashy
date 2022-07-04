import client from '../client';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

class User {
    username: string;
    password: string;
    email?: string;

    constructor(username: string, password: string, email?: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    static async findById(id: number) {
        const user = await client.users.findFirst({
            where: {
                id: id,
            },
        });

        return user;
    }

    async register() {
        if (!this.email) {
            return;
        }

        const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

        const user = await client.users.create({
            data: {
                username: this.username,
                password: hash,
                email: this.email,
            },
        });

        return user;
    }

    async login() {
        const user = await client.users.findFirst({
            where: {
                username: this.username,
            },
        });

        if (user) {
            const isValid = await bcrypt.compare(this.password, user?.password);

            if (isValid) {
                return user;
            }
        }

        return null;
    }
}

export default User;
