import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import config from '../config/auth';
import User from '../models/User';

export default async() => {
    const authheader = req.headers.authrization;
}