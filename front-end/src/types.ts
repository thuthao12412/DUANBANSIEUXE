// src/types.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    originalPrice?: number;
}

export interface ProductsState {
    bestSelling: Product[];
    discounted: Product[];
}

export interface Review {
    comment: string;
    customerName: string;
}

export interface ReviewsState {
    list: Review[];
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
}
// src/types/Fruit.ts
export interface Fruit {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    isSeasonal?: boolean; // Optional nếu không phải sản phẩm theo mùa
  }
  

export {};
