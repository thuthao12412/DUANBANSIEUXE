const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cartRoutes = require('./routes/cartRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(helmet()); // Bảo vệ Express apps khỏi một số cuộc tấn công bảo mật phổ biến
app.use(cors());   // Để cho phép các yêu cầu từ frontend
app.use(express.json()); // Để xử lý JSON trong body yêu cầu

app.use('/api/cart', cartRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
