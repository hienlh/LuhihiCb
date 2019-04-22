import {Router} from 'express';

const router = Router();

router.get('/', (_req, res) => {
    res.status(200).send({
        message: 'Welcome to server'
    })
});

export default router;
