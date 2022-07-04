import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../repos/user-repo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send('Missing required fields');
        }

        const user = new User(username, password);
        user.login()
            .then((user) => {
                if (user) {
                    return res.status(200).send('Success');
                }

                return res.status(401).send('Invalid credentials');
            })
            .catch(() => {
                return res.status(500).send('Error');
            });
    } else {
        res.status(405).send('Method not allowed');
    }
}
