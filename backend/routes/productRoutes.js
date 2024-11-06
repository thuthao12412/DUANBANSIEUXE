const express = require('express');
const router = express.Router();
const Product = require('../models/product'); // Giả sử bạn đã có mô hình sản phẩm
const verifyToken = require('../middleware/authMiddleware');

// Tạo sản phẩm mới (chỉ cho người quản trị)
router.post('/', verifyToken, async (req, res) => {
  try {
    const { name, price, category, description, image } = req.body;

    if (!req.user.admin) {
      return res.status(403).json({ message: 'Chỉ quản trị viên mới có thể thêm sản phẩm.' });
    }

    const newProduct = new Product({
      name,
      price,
      category,
      description,
      image
    });

    await newProduct.save();
    res.status(201).json({ message: 'Sản phẩm mới đã được tạo thành công.', newProduct });
  } catch (error) {
    console.error('Lỗi tạo sản phẩm:', error);
    res.status(500).json({ message: 'Không thể tạo sản phẩm. Vui lòng thử lại sau.' });
  }
});

// Lấy danh sách tất cả sản phẩm
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Lỗi lấy sản phẩm:', error);
    res.status(500).json({ message: 'Không thể lấy danh sách sản phẩm. Vui lòng thử lại sau.' });
  }
});

// Cập nhật sản phẩm (chỉ cho người quản trị)
router.put('/:productId', verifyToken, async (req, res) => {
  try {
    if (!req.user.admin) {
      return res.status(403).json({ message: 'Chỉ quản trị viên mới có thể cập nhật sản phẩm.' });
    }

    const { productId } = req.params;
    const updatedInfo = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedInfo, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm.' });
    }

    res.json({ message: 'Sản phẩm đã được cập nhật thành công.', updatedProduct });
  } catch (error) {
    console.error('Lỗi cập nhật sản phẩm:', error);
    res.status(500).json({ message: 'Không thể cập nhật sản phẩm. Vui lòng thử lại sau.' });
  }
});

// Xóa sản phẩm (chỉ cho người quản trị)
router.delete('/:productId', verifyToken, async (req, res) => {
  try {
    if (!req.user.admin) {
      return res.status(403).json({ message: 'Chỉ quản trị viên mới có thể xóa sản phẩm.' });
    }

    const { productId } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm để xóa.' });
    }

    res.json({ message: 'Sản phẩm đã được xóa thành công.' });
  } catch (error) {
    console.error('Lỗi xóa sản phẩm:', error);
    res.status(500).json({ message: 'Không thể xóa sản phẩm. Vui lòng thử lại sau.' });
  }
});

module.exports = router;
