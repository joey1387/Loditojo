import { Product } from "../types/Product";
import iphone15pro from "../assets/products/iphone15pro.jpeg";
import galaxys25 from "../assets/products/galaxys25.jpeg";
import macbookpro from "../assets/products/macbookpro.jpeg";
import applewatchseries10 from "../assets/products/applewatchseries10.jpeg";
import { moreProducts } from "./moreProducts";
export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "phones",
    price: 1000000,
    rating: 4.8,
    stock: 15,
    featured: true,
    image:iphone15pro,
    images:[
      iphone15pro,
      iphone15pro,
      iphone15pro,
      iphone15pro,
    ],
    description:
      "The iPhone 15 Pro is the latest flagship smartphone from Apple, featuring a sleek design, powerful A17 Pro chip, and an advanced camera system. It offers a stunning Super Retina XDR display, 5G connectivity, and improved battery life.",

    specifications: {
      brand: "Apple",
      model: "iPhone 15 Pro",
      color: "Natural Titanium",
      storage: "256GB",
      display: "6.1-inch Super Retina XDR",
      battery: "3274mAh",
      warranty: "12 Months",
    },

    reviews: [
      {
        name: "Daniel Buchi",
        rating: 5,
        comment: "Fantastic phone. The camera quality is amazing.",
        date: "12 June 2026",
      },
      {
        name: "Grace Yamaha",
        rating: 4,
        comment: "Battery lasts all day. Worth every naira.",
        date: "20 June 2026",
      },
    ],
  },

  {
    id: 2,
    name: "Samsung Galaxy S25",
    category: "phones",
    price: 1150000,
    rating: 4.7,
    stock: 10,
    featured: true,
    image:galaxys25,
    images:[
      galaxys25,
      galaxys25,
      galaxys25,
      galaxys25,
    ],
    description:
      "The Samsung Galaxy S25 offers a brilliant AMOLED display, flagship Snapdragon processor, AI-powered cameras, fast charging and premium performance.",

    specifications: {
      brand: "Samsung",
      model: "Galaxy S25",
      color: "Phantom Black",
      storage: "256GB",
      display: "6.8-inch Dynamic AMOLED",
      battery: "5000mAh",
      warranty: "12 Months",
    },

    reviews: [
      {
        name: "Samuel Victory",
        rating: 3,
        comment: "The phone is not sleek enough.",
        date: "15 June 2026",
      },
      {
        name: "Sandra Okoro",
        rating: 2,
        comment: "Battery life is not that good.",
        date: "27 June 2026",
      },
    ],
  },

  {
    id: 3,
    name: "MacBook Pro",
    category: "laptops",
    price: 2700000,
    rating: 4.9,
    stock: 5,
    featured: true,
    image:macbookpro,
     images:[
      macbookpro,
      macbookpro,
      macbookpro,
      macbookpro,
     ],
    description:
      "The MacBook Pro delivers exceptional performance with Apple's M3 chip, Retina display and incredible battery life for professionals.",

    specifications: {
      brand: "Apple",
      model: "MacBook Pro M3",
      color: "Space Black",
      storage: "512GB SSD",
      display: "14-inch Liquid Retina XDR",
      battery: "Up to 22 Hours",
      warranty: "12 Months",
    },

    reviews: [
      {
        name: "John Mustapha",
        rating: 5,
        comment: "Outstanding performance and build quality.",
        date: "10 July 2026",
      },
      {
        name: "Jane Smith",
        rating: 4,
        comment: "Great for productivity tasks.",
        date: "22 July 2026",
      },
    ],
  },

  {
    id: 4,
    name: "Apple Watch Series 10",
    category: "smartwatches",
    price: 650000,
    rating: 4.6,
    stock: 20,
    featured: false,
    image: applewatchseries10,
     images: [
      applewatchseries10,
      applewatchseries10,
      applewatchseries10,
      applewatchseries10,
     ],
    
    description:
      "The Apple Watch Series 10 combines advanced health tracking, fitness monitoring and seamless integration with your iPhone.",

    specifications: {
      brand: "Apple",
      model: "Series 10",
      color: "Midnight",
      storage: "64GB",
      display: "Always-On Retina OLED",
      battery: "Up to 18 Hours",
      warranty: "12 Months",
    },

    reviews: [
      {
        name: "Michael Johnson",
        rating: 5,
        comment: "Excellent smartwatch with great features.",
        date: "5 March 2026",
      },
      {
        name: "Emilia Davina",
        rating: 4,
        comment: "Good smartwatch for daily use.",
        date: "15 March 2026",
      },
    ],
  },
  
  ...moreProducts,
];