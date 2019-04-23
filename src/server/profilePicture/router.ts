import {Router} from 'express';

const router = Router();

router.get('/', (_req, res, next) => {
    res.status(200).send({
        message: 'Profile picture'
    });

    next()
});

export default router;
