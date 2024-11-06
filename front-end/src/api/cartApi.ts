import axiosClient from './axiosClient';

const cartApi = {
  getCartItems: () => {
    return axiosClient.get('/cart');
  },
  addItemToCart: (itemData: any) => {
    return axiosClient.post('/cart', itemData);
  },
  removeItemFromCart: (itemId: number) => {
    return axiosClient.delete(`/cart/${itemId}`);
  },
};

export default cartApi;
