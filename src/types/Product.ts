export type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

export type Specifications = {
  [key: string]: string;
};

export type Product = {
  id: string;

  name: string;

  category: string;

  price: number;

  rating: number;

  stock: number;

  featured: boolean;

  image: string;

  images?: string[];

  description: string;

  specifications?: Specifications;

  reviews: Review[];

  brand?: string;
};