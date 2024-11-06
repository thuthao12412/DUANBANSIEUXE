const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

// Lấy thông tin tài khoản người dùng đã đăng nhập
router.get('/me', verifyToken, (req, res) => {
  const userId = req.user.uid; // Lấy ID người dùng từ token
  // Giả sử bạn có logic để lấy thông tin tài khoản từ cơ sở dữ liệu
  res.json({ message: `Thông tin tài khoản của người dùng ${userId}` });
});

// Cập nhật thông tin tài khoản người dùng
router.put('/me', verifyToken, (req, res) => {
  const userId = req.user.uid; // Lấy ID người dùng từ token
  const updatedInfo = req.body; // Thông tin cập nhật từ người dùng

  // Giả sử bạn có logic để cập nhật thông tin người dùng
  res.json({ message: `Thông tin tài khoản của người dùng ${userId} đã được cập nhật`, updatedInfo });
});

module.exports = router;
