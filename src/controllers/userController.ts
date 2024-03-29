import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password, profileVisibility } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser: IUser = new User({
      username,
      email,
      password,
      profileVisibility
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.user;
    const { profileVisibility } = req.body;

    await User.findByIdAndUpdate(userId, { profileVisibility });

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.user;
    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getPublicProfiles = async (req: Request, res: Response): Promise<void> => {
  try {
    const publicProfiles = await User.find({ profileVisibility: 'public' }).select('-password');
    res.status(200).json(publicProfiles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
