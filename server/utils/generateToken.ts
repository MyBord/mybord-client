import jwt from 'jsonwebtoken';

const generateToken = (userId: string): string => jwt.sign(
  { userId },
  '$9zW3eBT77N3$eJTH8D$',
  { expiresIn: '1 day' },
);

export default generateToken;
