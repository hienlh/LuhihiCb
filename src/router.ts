import {Router} from 'express';
import {RouteNames} from './helper';
import serverRouter from './server/router';

const router = Router();

router.use(RouteNames.server, serverRouter);

export default router;
