const admin = require('firebase-admin');

// Đường dẫn đến tệp JSON chứa thông tin tài khoản dịch vụ của bạn
const serviceAccount = require('./path/to/your/firebase-adminsdk.json');

// Khởi tạo Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
