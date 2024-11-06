const admin = require('../config/firebaseAdmin');

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access. Token is missing.' });
  }

  try {
    // Xác minh token bằng Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;

    // Kiểm tra nếu người dùng là quản trị viên (custom claims)
    const userRecord = await admin.auth().getUser(decodedToken.uid);
    req.user.admin = userRecord.customClaims && userRecord.customClaims.admin === true;

    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(403).json({ message: 'Unauthorized access. Token is invalid.' });
  }
};

module.exports = verifyToken;
