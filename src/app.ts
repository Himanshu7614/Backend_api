import express, { Application } from 'express';
import mongoose from 'mongoose';
import passport from './config/passport';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

mongoose.connect('mongodb://localhost/authentication-api', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
