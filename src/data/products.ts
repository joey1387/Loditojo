import { Product } from "../types/Product";

export const products: Product[] =[

   {
    id: 1,
    name: "iPhone 15 Pro",
    category: "phones",
    price: 1850000,
    rating: 4.8,
    stock: 15,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
    description:"The iPhone 15 Pro is the latest flagship smartphone from Apple, featuring a sleek design, powerful A15 Bionic chip, and an advanced camera system. It offers a stunning Super Retina XDR display, 5G connectivity, and improved battery life. With iOS 15, users can enjoy new features like Focus mode, Live Text, and enhanced privacy settings. The iPhone 15 Pro is perfect for those seeking a premium smartphone experience with cutting-edge technology.",
    
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
    price: 1650000,
    rating: 4.7,
    stock: 10,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
    description:"The Samsung Galaxy S25 is a high-end Android smartphone that offers a stunning AMOLED display, powerful Exynos or Snapdragon processor, and a versatile camera system. It features 5G connectivity, fast charging, and a long-lasting battery. With Samsung's One UI, users can enjoy a smooth and intuitive interface with customizable features. The Galaxy S25 is ideal for those looking for a premium Android experience with top-notch performance and innovative features.",
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
    price: 3200000,
    rating: 4.9,
    stock: 5,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600",
    description:"The MacBook Pro is Apple's most powerful laptop, featuring a stunning Retina display, powerful M2 Pro or M2 Max chip, and a sleek design. It offers exceptional performance for creative professionals, with support for high-resolution displays, advanced graphics, and fast processing speeds. The MacBook Pro is perfect for those seeking a premium laptop experience with cutting-edge technology.",
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
    name: "Apple Watch",
    category: "accessories",
    price: 750000,
    rating: 4.6,
    stock: 20,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
    description:"The Apple Watch is a smartwatch designed by Apple, featuring a sleek design, advanced health and fitness tracking, and seamless integration with the iPhone. It offers a variety of customizable watch faces, apps, and features for a personalized experience. The Apple Watch is perfect for those seeking a premium smartwatch with cutting-edge technology.",
    reviews: [
    {
      name: "Michael Johnson",
      rating: 5,
      comment: "Excellent smartwatch with great features.",
      date: "5 march 2026",
    },
    {
      name: "Emilia Davina",
      rating: 4,
      comment: "Good smartwatch for daily use.",
      date: "15 march 2026",
    },
  ],
}

];
