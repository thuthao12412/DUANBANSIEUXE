import axiosClient from './axiosClient';

const fruitApi = {
  getAllFruits: () => {
    return axiosClient.get('/fruits');
  },
  getFruitById: (id: number) => {
    return axiosClient.get(`/fruits/${id}`);
  },
  createFruit: (fruitData: any) => {
    return axiosClient.post('/fruits', fruitData);
  },
  updateFruit: (id: number, fruitData: any) => {
    return axiosClient.put(`/fruits/${id}`, fruitData);
  },
  deleteFruit: (id: number) => {
    return axiosClient.delete(`/fruits/${id}`);
  },
};

export default fruitApi;
