export interface Product {
[x: string]: string | undefined;
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  description: string;
  quantity: number
  images: string[];

}

export type CartProducts = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
}

export interface Cart {
  id: number;
  products: CartProducts[];
  total: number;
  totalProducts: number;
}
