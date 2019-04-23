import {Router} from 'express';
import * as VerificationHandler from './handler';

const router = Router();

router.get('/', VerificationHandler.verifyWebhook);

export default router;
