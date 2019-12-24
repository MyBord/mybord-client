import jwt from 'jsonwebtoken';

export default (attemptedUser: string, request: any) => {
  const header = request.req.headers.authorization;

  if (!header) {
    throw new Error('Authentication required.');
  }

  const token = header.split(' ')[1];
  const decoded: any = jwt.verify(token, '$9zW3eBT77N3$eJTH8D$');

  if (attemptedUser !== decoded.userId) {
    throw new Error('User does not have access.');
  }
};
