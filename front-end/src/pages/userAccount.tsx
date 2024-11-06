import React, { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';

const UserAccount: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any | null>(null);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axiosClient.get('/users/me');
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await axiosClient.get('/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchUserInfo();
    fetchOrders();
  }, []);

  if (!userInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-account">
      <h1>Thông Tin Tài Khoản</h1>
      <div className="user-info">
        <p><strong>Tên người dùng:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
      </div>
      
      <h2>Đơn Hàng Của Bạn</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="order-item">
            <p><strong>Mã Đơn Hàng:</strong> {order.id}</p>
            <p><strong>Ngày Đặt:</strong> {order.date}</p>
            <p><strong>Tổng Tiền:</strong> ${order.total}</p>
          </div>
        ))
      ) : (
        <p>Bạn chưa có đơn hàng nào.</p>
      )}
    </div>
  );
};

export default UserAccount;
