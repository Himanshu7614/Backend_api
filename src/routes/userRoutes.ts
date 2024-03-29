import express from 'express';
import { registerUser, updateUserProfile, getUserProfile, getPublicProfiles } from '../controllers/userController';
import { isAuthenticated } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.put('/profile', isAuthenticated, updateUserProfile);
router.get('/profile', isAuthenticated, getUserProfile);
router.get('/public-profiles', getPublicProfiles);

export default router;
