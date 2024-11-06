// src/types/Fruit.ts
export interface Fruit {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    isSeasonal?: boolean; // Optional nếu không phải sản phẩm theo mùa
  }
export default Fruit;  