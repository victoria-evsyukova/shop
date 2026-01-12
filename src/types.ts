export interface CatalogType {
    id: number
    name: string
    price: number
    image: string
    category: string
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity?: number
};