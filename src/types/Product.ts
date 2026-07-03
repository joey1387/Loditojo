export type Review = {
  name: string;
  rating: number;
  comment: string;
  date: string;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  featured?: boolean;
  image: string;
  description: string;
  reviews: Review[];
};