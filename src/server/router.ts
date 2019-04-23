import {Router} from 'express';
import ProfilePictureRouter from './profilePicture/router';
import VerificationRouter from './verification/router';

const router = Router();

router.use('/', VerificationRouter);
router.use('/', ProfilePictureRouter);

export default router;
