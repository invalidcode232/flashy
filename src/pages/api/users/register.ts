import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../repos/user-repo';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).send('Missing required fields');
        }

        const user = new User(username, password, email);

        user.register()
            .then(() => {
                res.status(200).send('Success');
            })
            .catch(() => {
                res.status(500).send('Error');
            });
    } else {
        res.status(405).send('Method not allowed');
    }
}
