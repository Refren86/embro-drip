import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

type TTokenPayload = {
  email: string;
  role: string;
};

const hashPassword = (password: string) => bcrypt.hash(password, 10);
const comparePasswords = (hashedPass: string, password: string) => bcrypt.compare(password, hashedPass);
const generateToken = (payload: TTokenPayload) => jwt.sign(payload, 'secret', { expiresIn: '7d' });
const verifyToken = (token: string) => jwt.verify(token, 'secret');

export { hashPassword, comparePasswords, generateToken, verifyToken };
