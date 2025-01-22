import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '20d',
  });
  res.cookie('jwt', token, {
    maxAge: 20 * 24 * 60 * 60 * 1000, // 20 days
    httpOnly: true, // Prevent JavaScript from accessing the cookie
    sameSite: true, // Same site prevents CSRF(cross-site request forgery) attacks
    secure: process.env.NODE_ENV !== 'development'  // Cookie only works in https in production
  });
}
export default generateTokenAndSetCookie;