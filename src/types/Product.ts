export type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

export type Specifications = {
  brand: string;
  model: string;
  color: string;
  storage: string;
  display: string;
  battery: string;
  warranty: string;
};

export type Product = {
  id: number;

  name: string;

  category: string;

  price: number;

  rating: number;

  stock: number;

  featured: boolean;

  image: string;

  images: string[];

  description: string;

  specifications: Specifications;

  reviews: Review[];
};