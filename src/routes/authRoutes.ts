import express from 'express';
import passport from '../config/passport';

const router = express.Router();

router.post('/login', passport.authenticate('local', {
  successRedirect: '/api/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

export default router;
