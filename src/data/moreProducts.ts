import { Product } from "../types/Product";
import iphone16 from "../assets/products/iphone16.jpeg";
import iphone16promax from "../assets/products/iphone16promax.jpeg";
import galaxys24ultra from "../assets/products/galaxys24ultra.jpeg";
import galaxya56 from "../assets/products/galaxya56.jpeg";
import galaxya36 from "../assets/products/galaxya36.jpeg";
import googlepixel9pro from "../assets/products/googlepixel9pro.jpeg";
import oneplus13 from "../assets/products/oneplus13.jpeg";
import googlepixel8a from "../assets/products/googlepixel8a.jpeg";
import xiaomi15ultra from "../assets/products/xiaomi15ultra.jpeg";
import iphone15 from "../assets/products/iphone15.jpeg";
import macbookairm3 from "../assets/products/macbookairm3.jpeg";
import macbookpro16m from "../assets/products/macbookpro16m.jpeg";
import dellxps13 from "../assets/products/dellxps13.jpeg";
import hpspectrex360 from "../assets/products/hpspectrex360.jpeg";
import dellinspiron15 from "../assets/products/dellinspiron15.jpeg";
import lenovothinkpadx1carbon from "../assets/products/lenovothinkpad.jpeg";  
import hpenvy15 from "../assets/products/hpenvy15.jpeg";
import lenovoyoga9i from "../assets/products/lenovoyoga9i.jpeg";
import asusrogzephyrusg16 from "../assets/products/asusrog.jpeg";
import aceraspire5 from "../assets/products/aceraspire5.jpeg";
import airpodspro2 from "../assets/products/airpodspro2gen.jpeg"; 
import airpods4 from "../assets/products/airpods4.jpeg";
import samsunggalaxybuds3pro from "../assets/products/samsunggalaxybuds.jpeg"; 
import sonywh1000xm5 from "../assets/products/sonywh.jpeg";
import sonywf1000xm4 from "../assets/products/sonywf.jpeg";
import jblflip6 from "../assets/products/jblflip6.jpeg";
import jblcharge5 from "../assets/products/jblcharge5.jpeg";
import logitechmxmaster3s from "../assets/products/logitechmx.jpeg";
import logitechgproxsuperlight from "../assets/products/logitechgpro.jpeg";
import logitechmxkeyss from "../assets/products/logitechmxkeys.jpeg";
import applemagicmouse from "../assets/products/applemagicmouse.jpeg";
import applewatchultra2 from "../assets/products/applewatchultra2.jpeg";
import applewatchse from  "../assets/products/applewatchse.jpeg";
import samsunggalaxywatchultra from "../assets/products/samsunggalaxywatchultra.jpeg";
import samsunggalaxywatch7 from "../assets/products/samsunggalaxywatch7.jpeg";
import amazonechodot5thgen from "../assets/products/amazonechodot.jpeg";
import googlenesthub2ndgen from "../assets/products/googlenesthub.jpeg";
import applehomepodmini from "../assets/products/applehomepod.jpeg";
import anker737 from "../assets/products/anker737.jpeg";
import ugreen100wusbccharger from "../assets/products/ugreencharger.jpeg";
import sandiskextremepro1tb from "../assets/products/sandisk.jpeg";
import playstation5slim from "../assets/products/playstation5slim.jpeg";
import playstationportal from "../assets/products/playstationportal.jpeg";
import xboxseriesx from "../assets/products/xboxseriesx.jpeg";
import nintendoswitch from "../assets/products/nintendoswitch.jpeg";
import steelseriesartis from "../assets/products/steelseriesartis.jpeg";
export const moreProducts: Product[] = [

{
  id: 5,
  name: "iPhone 16",
  category: "phones",
  price: 1000000,
  rating: 4.9,
  stock: 12,
  featured: true,
  image: iphone16,
   images:[
    iphone16,
    iphone16,
    iphone16,
    iphone16,
   ],
  description: "Apple iPhone 16 with A18 chip and improved cameras.",
  specifications: {
    brand: "Apple",
    model: "iPhone 16",
    color: "Black",
    storage: "256GB",
    display: "6.1-inch OLED",
    battery: "3561mAh",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "David Paul",
      rating: 5,
      comment: "Very fast and smooth.",
      date: "3 July 2026",
    },
  ],
},

{
  id: 6,
  name: "iPhone 16 Pro Max",
  category: "phones",
  price: 1900000,
  rating: 5,
  stock: 8,
  featured: true,
  image: iphone16promax,
   images:[
    iphone16promax,
    iphone16promax,
    iphone16promax,
    iphone16promax,
   ], 
  description: "Apple's most powerful flagship smartphone.",
  specifications: {
    brand: "Apple",
    model: "iPhone 16 Pro Max",
    color: "Desert Titanium",
    storage: "512GB",
    display: "6.9-inch OLED",
    battery: "4676mAh",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Emmanuel Obi",
      rating: 5,
      comment: "Premium phone in every way.",
      date: "5 July 2026",
    },
  ],
},

{
  id: 7,
  name: "Samsung Galaxy S24 Ultra",
  category: "phones",
  price: 1300000,
  rating: 4.9,
  stock: 11,
  featured: true,
  image: galaxys24ultra,
   images:[
    galaxys24ultra,
    galaxys24ultra,
    galaxys24ultra,
    galaxys24ultra,
   ], 

  description: "Samsung flagship with Galaxy AI.",
  specifications: {
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    color: "Titanium Gray",
    storage: "256GB",
    display: "6.8-inch AMOLED",
    battery: "5000mAh",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Victor James",
      rating: 5,
      comment: "Excellent camera and battery.",
      date: "8 July 2026",
    },
  ],
},

{
  id: 8,
  name: "Samsung Galaxy A56",
  category: "phones",
  price: 580000,
  rating: 4.6,
  stock: 18,
  featured: false,
  image: galaxya56,
  images:[
    galaxya56,
    galaxya56,
    galaxya56,
    galaxya56,
  ], 
  description: "Affordable Samsung smartphone with premium features.",
  specifications: {
    brand: "Samsung",
    model: "Galaxy A56",
    color: "Awesome Blue",
    storage: "256GB",
    display: "6.7-inch AMOLED",
    battery: "5000mAh",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Blessing Ada",
      rating: 4,
      comment: "Great value for money.",
      date: "10 July 2026",
    },
  ],
},

{
  id: 9,
  name: "Samsung Galaxy A36",
  category: "phones",
  price: 400000,
  rating: 4.5,
  stock: 22,
  featured: false,
  image: galaxya36,
  images:[
    galaxya36,
    galaxya36,
    galaxya36,
    galaxya36,
  ], 
  description: "Reliable Samsung smartphone for everyday use.",
  specifications: {
    brand: "Samsung",
    model: "Galaxy A36",
    color: "Black",
    storage: "128GB",
    display: "6.6-inch AMOLED",
    battery: "5000mAh",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Faith John",
      rating: 4,
      comment: "Very dependable phone.",
      date: "11 July 2026",
    },
  ],
},

{
  id: 10,
  name: "Google Pixel 9 Pro",
  category: "phones",
  price: 1200000,
  rating: 4.8,
  stock: 9,
  featured: true,
  image: googlepixel9pro,
  images:[
    googlepixel9pro,
    googlepixel9pro,
    googlepixel9pro,
    googlepixel9pro,
  ],  
  description: "Google flagship powered by Gemini AI.",
  specifications: {
    brand: "Google",
    model: "Pixel 9 Pro",
    color: "Obsidian",
    storage: "256GB",
    display: "6.7-inch OLED",
    battery: "4700mAh",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Henry Smart",
      rating: 5,
      comment: "Amazing software experience.",
      date: "13 July 2026",
    },
  ],
},

{
  id: 11,
  name: "Google Pixel 8a",
  category: "phones",
  price: 650000,
  rating: 4.6,
  stock: 13,
  featured: false,
  image: googlepixel8a,
  images:[
    googlepixel8a,
    googlepixel8a,
    googlepixel8a,
    googlepixel8a,
  ], 
  description: "Compact Pixel with excellent cameras.",
  specifications: {
    brand: "Google",
    model: "Pixel 8a",
    color: "Bay",
    storage: "128GB",
    display: "6.1-inch OLED",
    battery: "4492mAh",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Sarah Bello",
      rating: 5,
      comment: "Fantastic camera quality.",
      date: "15 July 2026",
    },
  ],
},

{
  id: 12,
  name: "OnePlus 13",
  category: "phones",
  price: 1150000,
  rating: 4.8,
  stock: 10,
  featured: true,
  image: oneplus13,
  images:[
   oneplus13,
   oneplus13,
   oneplus13,
   oneplus13,
  ], 
  description: "Premium OnePlus flagship with Snapdragon processor.",
  specifications: {
    brand: "OnePlus",
    model: "13",
    color: "Black",
    storage: "256GB",
    display: "6.8-inch AMOLED",
    battery: "6000mAh",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Samuel King",
      rating: 5,
      comment: "Extremely smooth performance.",
      date: "17 July 2026",
    },
  ],
},

{
  id: 13,
  name: "Xiaomi 15 Ultra",
  category: "phones",
  price: 1500000,
  rating: 4.8,
  stock: 7,
  featured: true,
  image: xiaomi15ultra,
  images:[
   xiaomi15ultra,
   xiaomi15ultra,
   xiaomi15ultra,
   xiaomi15ultra,
  ], 
  description: "Flagship Xiaomi smartphone with Leica cameras.",
  specifications: {
    brand: "Xiaomi",
    model: "15 Ultra",
    color: "Silver",
    storage: "512GB",
    display: "6.73-inch AMOLED",
    battery: "5410mAh",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Peter Isaac",
      rating: 5,
      comment: "Camera is unbelievable.",
      date: "18 July 2026",
    },
  ],
},

{
  id: 14,
  name: "iPhone 15",
  category: "phones",
  price: 650000,
  rating: 4.8,
  stock: 14,
  featured: false,
  image: iphone15,
  images:[
   iphone15,
   iphone15,
   iphone15,
   iphone15,
  ], 
  description: "Powerful Apple smartphone with Dynamic Island.",
  specifications: {
    brand: "Apple",
    model: "iPhone 15",
    color: "Blue",
    storage: "128GB",
    display: "6.1-inch Super Retina XDR",
    battery: "3349mAh",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Joy Musa",
      rating: 5,
      comment: "Beautiful phone.",
      date: "20 July 2026",
    },
  ],
},
{
  id: 15,
  name: "MacBook Air M3",
  category: "laptops",
  price: 1700000,
  rating: 4.8,
  stock: 10,
  featured: true,
  image: macbookairm3,
  images:[
  macbookairm3,
  macbookairm3,
  macbookairm3,
  macbookairm3,
  ], 
  description: "Lightweight and powerful MacBook for everyday use.",
  specifications: {
    brand: "Apple",
    model: "MacBook Air M3",
    color: "Black",
    storage: "256GB",
    display: "13.6-inch Liquid Retina",
    battery: "18 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Alice Johnson",
      rating: 5,
      comment: "Excellent performance and build quality.",
      date: "2 July 2026",
    },
    {
      name: "Bob Smith",
      rating: 2,
      comment: "Battery life could be better.",
      date: "5 July 2026",
    }
  ],
},
{
  id: 16,
  name: "MacBook Pro 16 M3",
  category: "laptops",
  price: 3500000,
  rating: 4.9,
  stock: 5,
  featured: true,
  image: macbookpro16m,
  images:[
  macbookpro16m,
  macbookpro16m,
  macbookpro16m,
  macbookpro16m,
  ], 
  description: "Powerful MacBook Pro for professional use.",
  specifications: {
    brand: "Apple",
    model: "MacBook Pro 16 M3",
    color: "Silver",
    storage: "512GB",
    display: "16.2-inch Liquid Retina XDR",
    battery: "20 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Charlie Brown",
      rating: 5,
      comment: "Outstanding performance for creative work.",
      date: "10 July 2026",
    },
    {
      name: "Diana Prince",
      rating: 4,
      comment: "Great laptop, but a bit pricey.",
      date: "12 July 2026",
    }
  ],
},
{
  id: 17, 
  name: "Dell XPS 13",
  category: "laptops",
  price: 2000000,
  rating: 4.7,
  stock: 8,
  featured: false,
  image: dellxps13,
  images:[
  dellxps13,
  dellxps13,
  dellxps13,
  dellxps13,
  ], 
  description: "Compact and powerful laptop for productivity.",
  specifications: {
    brand: "Dell",
    model: "XPS 13",
    color: "Silver",
    storage: "256GB",
    display: "13.4-inch FHD+",
    battery: "12 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Eva Green",
      rating: 4,
      comment: "Good laptop for the price.",
      date: "15 July 2026",
      
    },
    {
      name: "Frank Ocean",
      rating: 3,
      comment: "Performance is decent, but could be better.",
      date: "18 July 2026",
    }
  ],
},
{
  id: 18,
  name: "HP Spectre x360",
  category: "laptops",
  price: 1900000,
  rating: 4.8,
  stock: 6,
  featured: true, 
  image: hpspectrex360,
  images:[
  hpspectrex360,
  hpspectrex360,
  hpspectrex360,
  hpspectrex360,
  ], 
  description: "Versatile 2-in-1 laptop with premium design.",
  specifications: {
    brand: "HP",
    model: "Spectre x360",
    color: "Black",
    storage: "512GB",
    display: "13.3-inch 4K OLED",
    battery: "15 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Grace Hopper",
      rating: 5,
      comment: "Excellent laptop for the price.",
      date: "20 July 2026",
    },
    {
      name: "Hank Moody",
      rating: 4,
      comment: "Great design, but a bit heavy.",
      date: "22 July 2026",
    }
  ],

},
{
  id: 19,
  name: "Dell Inspiron 15",
  category: "laptops",
  price: 900000,
  rating: 4.0,
  stock: 8,
  featured: false,
  image: dellinspiron15,
   images:[
  dellinspiron15,
  dellinspiron15,
  dellinspiron15,
  dellinspiron15,
  ], 
  description: "Affordable laptop for everyday use.",
  specifications: {
    brand: "Dell",
    model: "Inspiron 15",
    color: "Silver",
    storage: "256GB",
    display: "15.6-inch HD",
    battery: "8 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Ivy Lee",
      rating: 4,
      comment: "Good value for money.",
      date: "25 July 2026",
    },
    {
      name: "Chidinmma Okoro",
      rating: 1,
      comment: "Very disappointed with the performance.",
      date: "28 June 2026",
    }
  ],
},
{
  id: 20,
  name: "Lenovo ThinkPad X1 Carbon",
  category: "laptops",
  price: 2200000,
  rating: 4.8,
  stock: 7,
  featured: true,
  image: lenovothinkpadx1carbon,
  images:[
  lenovothinkpadx1carbon,
  lenovothinkpadx1carbon,
  lenovothinkpadx1carbon,
  lenovothinkpadx1carbon,
  ], 
  description: "Premium ultrabook for professionals.",
  specifications: {
    brand: "Lenovo",
    model: "ThinkPad X1 Carbon",
    color: "Black",
    storage: "256GB",
    display: "14-inch FHD",
    battery: "15 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Joseph Obasi",
      rating: 5,
      comment: "Excellent laptop for the price.",
      date: "30 June 2026",
    },
    {
      name: "Kemi Adebayo",
      rating: 3,
      comment: "I don't like the keyboard layout.",
      date: "1 July 2026",
    }
  ],
},
{
  id: 21,
  name: "HP Envy 15",
  category: "laptops",
  price: 1300000,
  rating: 4.5,
  stock: 10,
  featured: false,
  image: hpenvy15,
   images:[
  hpenvy15,
  hpenvy15,
  hpenvy15,
  hpenvy15,
  ], 
  description: "Versatile laptop for everyday use.",
  specifications: {
    brand: "HP",
    model: "Envy 15",
    color: "Silver",
    storage: "256GB",
    display: "15.6-inch FHD",
    battery: "10 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Linda Johnson",
      rating: 4,
      comment: "Good laptop for the price.",
      date: "5 July 2026",
    },
    {
      name: "Michael Smith",
      rating: 2,
      comment: "Battery life is not that good.",
      date: "7 July 2026",
    }
  ],

},
{
  id: 22,
  name: "Lenovo Yoga 9i",
  category: "laptops",
  price: 2000000,
  rating: 4.7,
  stock: 9,
  featured: true,
  image: lenovoyoga9i,
  images:[
  lenovoyoga9i,
  lenovoyoga9i,
  lenovoyoga9i,
  lenovoyoga9i,
  ], 
  description: "Premium 2-in-1 laptop with excellent performance.",
  specifications: {
    brand: "Lenovo",
    model: "Yoga 9i",
    color: "Black",
    storage: "512GB",
    display: "14-inch 4K OLED",
    battery: "15 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Nina Williams",
      rating: 5,
      comment: "Outstanding performance and design.",
      date: "10 July 2026",
    },
    {
      name: "Oscar Martinez",
      rating: 4,
      comment: "Great laptop for the price.",
      date: "12 July 2026",
    }
  ],
},
{
  id: 23,
  name: "Asus ROG Zephyrus G16",
  category: "laptops",
  price: 2800000,
  rating: 4.9,
  stock: 5,
  featured: true,
  image: asusrogzephyrusg16,
  images:[
  asusrogzephyrusg16,
  asusrogzephyrusg16,
  asusrogzephyrusg16,
  asusrogzephyrusg16,
  ], 
  description: "High-performance gaming laptop with exceptional design.",
  specifications: {
    brand: "Asus",
    model: "ROG Zephyrus G16",
    color: "Black",
    storage: "1TB",
    display: "16-inch QHD",
    battery: "8 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Alice Johnson",
      rating: 5,
      comment: "Fantastic gaming experience.",
      date: "15 July 2026",
    },
    {
      name: "Bob Smith",
      rating: 4,
      comment: "Great performance, but a bit noisy.",
      date: "17 July 2026",
    }
  ],
},
{
  id: 24,
  name: "Acer Aspire 5",
  category: "laptops",
  price: 850000,
  rating: 4.3,
  stock: 12,
  featured: false,
  image: aceraspire5,
  images:[
  aceraspire5,
  aceraspire5,
  aceraspire5,
  aceraspire5,
  ], 
  description: "Affordable laptop for everyday use.",
  specifications: {
    brand: "Acer",
    model: "Aspire 5",
    color: "Silver",
    storage: "256GB",
    display: "15.6-inch HD",
    battery: "8 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "David Brown",
      rating: 4,
      comment: "Good value for money.",
      date: "20 July 2026",
    },
    {
      name: "Emily Davis",
      rating: 3,
      comment: "Decent performance for the price.",
      date: "22 July 2026",
    }
  ],
},
{
  id: 25,
  name: "AirPods Pro (2nd Generation)",
  category: "accessories",
  price: 250000,
  rating: 4.8,
  stock: 20,
  featured: true,
  image: airpodspro2,
  images:[
  aceraspire5,
  aceraspire5,
  aceraspire5,
  aceraspire5,
  ], 
  description: "Active Noise Cancellation and Transparency mode.",
  specifications: {
    brand: "Apple",
    model: "AirPods Pro (2nd Generation)",
    color: "White",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 6 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Joy musa",
      rating: 5,
      comment: "Excellent sound quality and noise cancellation.",
      date: "25 July 2026",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Great for workouts and daily use.",
      date: "27 July 2026",
    }
  ],
},
{
  id: 26,
  name: "Airpods 4",
  category: "accessories",
  price: 200000,
  rating: 4.5,
  stock: 25,
  featured: true,
  image: airpods4,
  images:[
  airpods4,
  airpods4,
  airpods4,
  airpods4,
  ], 
  description: "Wireless earbuds with active noise cancellation.",
  specifications: {
    brand: "Apple",
    model: "Airpods 4",
    color: "White",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 5 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Alice Johnson",
      rating: 5,
      comment: "Excellent sound quality and convenience.",
      date: "30 June 2026",
    },
    {
      name: "Bob Smith",
      rating: 4,
      comment: "Great for daily use and workouts.",
      date: "1 July 2026",
    }
  ],
},
{
  id: 27,
  name: "Samsung Galaxy Buds 3 Pro",
  category: "accessories",
  price: 280000,
  rating: 4.9,
  stock: 15,
  featured: true,
  image: samsunggalaxybuds3pro,
  images:[
   samsunggalaxybuds3pro,
   samsunggalaxybuds3pro,
   samsunggalaxybuds3pro,
   samsunggalaxybuds3pro,
  ], 
  description: "Premium wireless earbuds with advanced noise cancellation.",
  specifications: {
    brand: "Samsung",
    model: "Galaxy Buds 3 Pro",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 6 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Charlie Wilson",
      rating: 5,
      comment: "Outstanding sound quality and noise cancellation.",
      date: "5 July 2026",
    },
    {
      name: "Diana Lee",
      rating: 3,
      comment: "Great, but i don't like the color",
      date: "7 July 2026",
    }
  ],
},
{
  id: 28,
  name: "Sony WH-1000XM5",
  category: "accessories",
  price: 400000,
  rating: 4.8,
  stock: 10,
  featured: true,
  image: sonywh1000xm5,
  images:[
    sonywh1000xm5,
    sonywh1000xm5,
    sonywh1000xm5,
    sonywh1000xm5,
  ], 
  description: "Industry-leading noise-canceling headphones.",
  specifications: {
    brand: "Sony",
    model: "WH-1000XM5",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 30 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Ethan Clark",
      rating: 5,
      comment: "Exceptional noise cancellation and sound quality.",
      date: "10 July 2026",
    },
    {
      name: "Fiona Green",
      rating: 4,
      comment: "Great for travel and daily use.",
      date: "12 July 2026",
    }
  ],
},
{
  id: 29,
  name: "Sony WF-1000XM4",
  category: "accessories",
  price: 350000,
  rating: 4.7,
  stock: 15,
  featured: true,
  image: sonywf1000xm4,
   images:[
    sonywf1000xm4,
    sonywf1000xm4,
    sonywf1000xm4,
    sonywf1000xm4,
  ], 
  description: "Premium wireless earbuds with advanced noise cancellation.",
  specifications: {
    brand: "Sony",
    model: "WF-1000XM4",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 24 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Grace Lee",
      rating: 1,
      comment: "Doesn't last",
      date: "15 July 2026",
    },
    {
      name: "Henry Taylor",
      rating: 4,
      comment: "Great for daily use and workouts.",
      date: "17 July 2026",
    }
  ],
},
{
  id: 30,
  name: "JBL Flip 6",
  category: "accessories",
  price: 150000,
  rating: 4.6,
  stock: 20,
  featured: true,
  image: jblflip6,
  images:[
    jblflip6,
    jblflip6,
    jblflip6,
    jblflip6,
  ], 
  description: "Portable Bluetooth speaker with powerful sound.",
  specifications: {
    brand: "JBL",
    model: "Flip 6",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 12 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Ivy Brown",
      rating: 5,
      comment: "Excellent sound quality and portability.",
      date: "20 June 2026",
    },
    {
      name: "James Osas",
      rating: 4,
      comment: "Great for parties and outdoor events.",
      date: "22 June 2026",
    }
  ],
},
{
  id: 31,
  name: "JBL Charge 5",
  category: "accessories",
  price: 200000,
  rating: 4.7,
  stock: 15,
  featured: true,
  image: jblcharge5,
  images:[
    jblcharge5,
    jblcharge5,
    jblcharge5,
    jblcharge5,
  ], 
  description: "Powerful portable Bluetooth speaker with long-lasting battery.",
  specifications: {
    brand: "JBL",
    model: "Charge 5",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 12 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Kate Miller",
      rating: 5,
      comment: "Excellent sound quality and impressive battery life.",
      date: "25 June 2026",
    },
    {
      name: "Liam Wilson",
      rating: 4,
      comment: "Great for outdoor activities and social gatherings.",
      date: "27 June 2026",
    }
  ],
},
{
  id: 32,
  name: "Logitech MX Master 3S",
  category: "accessories",
  price: 120000,
  rating: 4.8,
  stock: 10,
  featured: true,
  image: logitechmxmaster3s,
  images:[
   logitechmxmaster3s,
   logitechmxmaster3s,
   logitechmxmaster3s,
   logitechmxmaster3s,
  ], 
  description: "High-performance wireless mouse with customizable buttons.",
  specifications: {
    brand: "Logitech",
    model: "MX Master 3S",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 70 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Mia Johnson",
      rating: 5,
      comment: "Exceptional precision and comfort for long hours of use.",
      date: "30 June 2026",
    },
    {
      name: "Noah Williams",
      rating: 4,
      comment: "Great mouse for productivity and multitasking.",
      date: "2 July 2026",
    }
  ],
},
{
  id: 33,
  name: "Logitech G Pro X Superlight",
  category: "accessories",
  price: 150000,
  rating: 4.9,
  stock: 10,
  featured: true,
  image: logitechgproxsuperlight,
  images:[
   logitechgproxsuperlight,
   logitechgproxsuperlight,
   logitechgproxsuperlight,
   logitechgproxsuperlight,
  ], 
  description: "High-performance gaming mouse with ultra-low latency.",
  specifications: {
    brand: "Logitech",
    model: "G Pro X Superlight",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 70 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Olivia Davis",
      rating: 5,
      comment: "Incredible speed and accuracy for competitive gaming.",
      date: "5 July 2026",
    },
    {
      name: "Paul Martinez",
      rating: 4,
      comment: "Excellent build quality and responsive buttons.",
      date: "7 July 2026",
    }
  ],
},
{
  id: 34,
  name: "Logitech MX Keys S",
  category: "accessories",
  price: 130000,
  rating: 4.7,
  stock: 10,
  featured: true,
  image: logitechmxkeyss,
  images:[
   logitechmxkeyss,
   logitechmxkeyss,
   logitechmxkeyss,
   logitechmxkeyss,
  ], 
  description: "Wireless keyboard with smart illumination and comfortable typing experience.",
  specifications: {
    brand: "Logitech",
    model: "MX Keys S",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 70 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Sophia Anderson",
      rating: 5,
      comment: "Outstanding keyboard with excellent key feel and lighting.",
      date: "10 July 2026",
    },
    {
      name: "William Thomas",
      rating: 4,
      comment: "Great keyboard for productivity and daily use.",
      date: "12 July 2026",
    }
  ],
},
{
  id: 35,
  name: "Apple magic mouse",
  category: "accessories",
  price: 120000,
  rating: 4.6,
  stock: 10,
  featured: true,
  image: applemagicmouse,
  images:[
  applemagicmouse,
  applemagicmouse,
  applemagicmouse,
  applemagicmouse,
  ], 
  description: "Wireless mouse with multi-touch surface and sleek design.",
  specifications: {
    brand: "Apple",
    model: "Magic Mouse",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 70 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Olivia Davis",
      rating: 5,
      comment: "Incredible speed and accuracy for competitive gaming.",
      date: "5 July 2026",
    },
    {
      name: "Paul Ochenu",
      rating: 4,
      comment: "Excellent build quality and responsive buttons.",
      date: "7 July 2026",
    }
  ],
},
{
  id: 36,
  name: "Apple Watch Ultra 2",
  category: "smartwatches",
  price: 1200000,
  rating: 4.9,
  stock: 10,  
  featured: true,
  image: applewatchultra2,
   images:[
    applewatchultra2,
    applewatchultra2,
    applewatchultra2,
    applewatchultra2,
  ], 
  description: "Advanced smartwatch with enhanced durability and performance.",
  specifications: {
    brand: "Apple",
    model: "Watch Ultra 2",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 70 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Victory Magoba",
      rating: 2,
      comment: "Not worth the price.",
      date: "5 July 2026",
    },
    {
      name: "franklin Okechukwu",
      rating: 3,
      comment: "Good but not great.",
      date: "7 July 2026",
    }
  ],
},
{
  id: 37,
  name: "Apple Watch SE",
  category: "smartwatches",
  price: 350000,
  rating: 4.9,
  stock: 10,
  featured: true,
  image: applewatchse,
  images:[
   applewatchse,
   applewatchse,
   applewatchse,
   applewatchse,
  ], 
  description: "Affordable smartwatch with essential features and sleek design.",
  specifications: {
    brand: "Apple",
    model: "Watch SE",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 70 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "oringo Nabud",
      rating: 4,
      comment: "Good value for money.",
      date: "5 July 2026",
    },
    {
      name: "franklin Samuel",
      rating: 5,
      comment: "Excellent smartwatch for the price.",
      date: "7 July 2026",
    }
  ],
},
{
  id: 38,
  name: "Samsung Galaxy Watch Ultra",
  category: "smartwatches",
  price: 700000,
  rating: 4.9,
  stock: 10,
  featured: true,
  image: samsunggalaxywatchultra,
   images:[
   samsunggalaxywatchultra,
   samsunggalaxywatchultra,
   samsunggalaxywatchultra,
   samsunggalaxywatchultra,
  ], 
  description: "Advanced smartwatch with enhanced durability and performance.",
  specifications: {
    brand: "Samsung",
    model: "Galaxy Watch Ultra",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 70 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Rose Femi",
      rating: 4,
      comment: "I love the design and features.",
      date: "5 July 2026",
    },
    {
      name: "jimmy Goshen",
      rating: 5,
      comment: "Best smartwatch I've ever owned.",
      date: "7 July 2026",
    }
  ],
},
{
  id: 39,
  name: "Samsung Galaxy Watch 7",
  category: "smartwatches",
  price: 450000,
  rating: 4.9,
  stock: 10,    
  featured: true,
  image: samsunggalaxywatch7,
  images:[
   samsunggalaxywatch7,
   samsunggalaxywatch7,
   samsunggalaxywatch7,
   samsunggalaxywatch7,
  ], 
  description: "Premium smartwatch with advanced health and fitness tracking features.",
  specifications: {
    brand: "Samsung",
    model: "Galaxy Watch 7",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "Up to 70 hours",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Levi Johnson",
      rating: 5,
      comment: "  My health and fitness journeyhave improved since I started using this watch.",
      date: "1 July 2026",
    },
    {
      name: "july okama",
      rating: 3,
      comment: "Good but not so great.",
      date: "4 July 2026",
    }
  ],
},
{
  id: 40,
  name: "Amazon Echo Dot (5th Generation)",
  category: "smart home devices",
  price: 80000,
  rating: 4.5,
  stock: 20,
  featured: true,
  image: amazonechodot5thgen,
  images:[
  amazonechodot5thgen,
  amazonechodot5thgen,
  amazonechodot5thgen,
  amazonechodot5thgen,
  ], 
  description: "Affordable smart speaker with excellent sound quality and voice control.",
  specifications: {
    brand: "Amazon",
    model: "Echo Dot (5th Generation)",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "N/A",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Ginika Okafor",
      rating: 5,
      comment:  "Great sound quality and easy to set up.",
      date: "10 July 2026",
    },
    {
      name: "Jane Smith",
      rating: 1,
      comment: "Not satisfied with the purchase.",
      date: "12 July 2026",
    }
  ],
},
{
  id: 41,
  name: "Google Nest Hub (2nd Generation)",
  category: "smart home devices",
  price: 150000,
  rating: 4.7,
  stock: 15,
  featured: true,
  image: googlenesthub2ndgen,
  images:[
   googlenesthub2ndgen,
   googlenesthub2ndgen,
   googlenesthub2ndgen,
   googlenesthub2ndgen,
  ], 
  description: "Intelligent smart display with seamless integration and natural language processing.",
  specifications: {
    brand: "Google",
    model: "Nest Hub (2nd Generation)",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "N/A",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Alice Johnson",
      rating: 5,
      comment: "Excellent smart display with great functionality.",
      date: "15 July 2026",
    },
    {
      name: "Bob Williams",
      rating: 4,
      comment: "Good smart display but could be better.",
      date: "17 July 2026",
    }
  ],
},
{
  id: 42,
  name: "Apple HomePod mini",
  category: "smart home devices",
  price: 120000,
  rating: 4.8,
  stock: 10,
  featured: true,
  image: applehomepodmini,
   images:[
   applehomepodmini,
   applehomepodmini,
   applehomepodmini,
   applehomepodmini,
  ], 
  description: "Compact smart speaker with excellent sound quality and seamless integration.",
  specifications: {
    brand: "Apple",
    model: "HomePod mini",
    color: "Black",
    storage: "N/A",
    display: "N/A",
    battery: "N/A",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "Charlie Brown",
      rating: 5,
      comment: "Amazing sound quality and easy to use.",
      date: "20 July 2026",
    },
    {
      name: "Diana Prince",
      rating: 4,
      comment: "Great smart speaker for the price.",
      date: "22 July 2026",
    }
  ],
},
 {
  id: 43,
  name: "Anker 737 Power Bank (PowerCore 24K)",
  category: "accessories",
  price: 100000,
  rating: 4.8,
  stock: 10,
  featured: false,
  image: anker737,
  images:[
  anker737,
  anker737,
  anker737,
  anker737,
  ], 
  description:
    "The Anker 737 Power Bank (PowerCore 24K) is a high-capacity portable charger with a 24,000mAh battery and up to 140W fast charging. It can charge laptops, smartphones, tablets, and other USB-C devices, making it ideal for travel, work, and everyday use.",

  specifications: {
    brand: "Anker",
    model: "737 Power Bank (PowerCore 24K)",
    color: "Black",
    capacity: "24,000mAh",
    output: "140W Max",
    ports: "2 × USB-C, 1 × USB-A",
    charging: "USB-C Fast Recharge",
    compatibility: "Laptops, Smartphones, Tablets, Nintendo Switch",
    warranty: "18 Months",
  },

  reviews: [
    {
      name: "Michael Johnson",
      rating: 5,
      comment:
        "Excellent power bank! Charges my MacBook Pro and phone incredibly fast.",
      date: "20 June 2026",
    },
    {
      name: "Sarah Williams",
      rating: 4,
      comment:
        "Great battery capacity and fast charging. A bit heavy, but worth it for travel.",
      date: "22 June 2026",
    },
  ],
},
{
  id: 44,
  name: "Ugreen 100W USB-C Charger",
  category: "accessories",
  price: 30000,
  rating: 4.5,
  stock: 20,
  featured: false,
  image: ugreen100wusbccharger,
  images:[
  ugreen100wusbccharger,
  ugreen100wusbccharger,
  ugreen100wusbccharger,
  ugreen100wusbccharger,
  ], 
  description: "High-speed USB-C charger with 100W output, perfect for charging laptops and other USB-C devices.",
  specifications: {
    brand: "Ugreen",
    model: "100W USB-C Charger",
    color: "Black",
    output: "100W Max",
    ports: "1 × USB-C",
    charging: "USB-C Fast Recharge",
    compatibility: "Laptops, Smartphones, Tablets",
    warranty: "12 Months",
  },
  reviews: [
    {
      name: "David Wilson",
      rating: 5,
      comment: "Fast charging and reliable performance.",
      date: "15 July 2026",
    },
    {
      name: "Lisa Anderson",
      rating: 4,
      comment: "Good charger for the price. Works well with my laptop.",
      date: "17 July 2026",
    }
  ],
},
{
  id: 45,
  name: "SanDisk Extreme Pro 1TB Portable SSD",
  category: "accessories",
  price: 200000,
  rating: 4.9,
  stock: 5,
  featured: true,
  image: sandiskextremepro1tb,
  images:[
  sandiskextremepro1tb,
  sandiskextremepro1tb,
  sandiskextremepro1tb,
  sandiskextremepro1tb,
  ], 
  description: "High-performance portable SSD with lightning-fast read and write speeds.",
  specifications: {
    brand: "SanDisk",
    model: "Extreme Pro 1TB Portable SSD",
    color: "Black",
    capacity: "1TB",
    interface: "USB-C",
    readSpeed: "1,000 MB/s",
    writeSpeed: "1,000 MB/s",
    warranty: "5 Years",
  },
  reviews: [
    {
      name: "Nonso Nwoke",
      rating: 5,
      comment: "Very good",
      date: "10 July 2026",
    },
    {
      name: "Lawretta Kamsi",
      rating: 4,
      comment: "Great SSD for the price. Fast and reliable.",
      date: "12 July 2026",
    }
  ],
},
{
  id: 46,
  name: "PlayStation 5 Slim",
  category: "gaming",
  price: 850000,
  rating: 4.9,
  stock: 8,
  featured: true,
  image: playstation5slim,
  images:[
  playstation5slim,
  playstation5slim,
  playstation5slim,
  playstation5slim,
  ], 
  description:
    "Experience next-generation gaming with the PlayStation 5 Slim. Featuring a more compact design, lightning-fast 1TB SSD storage, ray tracing, 4K gaming up to 120Hz, and the immersive DualSense wireless controller.",

  specifications: {
    brand: "Sony",
    model: "PlayStation 5 Slim",
    color: "White",
    storage: "1TB SSD",
    processor: "AMD Zen 2 8-Core CPU",
    graphics: "AMD RDNA 2 GPU",
    resolution: "Up to 4K 120Hz, 8K Supported",
    connectivity: "Wi-Fi 6, Bluetooth 5.1, Ethernet",
    warranty: "12 Months",
  },

  reviews: [
    {
      name: "Chinedu Okafor",
      rating: 5,
      comment:
        "The graphics are incredible and the loading times are almost instant. Worth every naira.",
      date: "18 July 2026",
    },
    {
      name: "Aisha Bello",
      rating: 5,
      comment:
        "The Slim design fits perfectly in my TV setup. DualSense controller is amazing.",
      date: "24 July 2026",
    },
  ],
},
{
  id: 47,
  name: "PlayStation Portal",
  category: "gaming",
  price: 380000,
  rating: 4.5,
  stock: 12,
  featured: false,
  image: playstationportal,
  images:[
  playstationportal,
  playstationportal,
  playstationportal,
  playstationportal,
  ], 
  description:
    "The PlayStation Portal lets you stream and play compatible PS5 games over Wi-Fi using Remote Play. It features an immersive 8-inch Full HD display with DualSense-inspired controls for a premium handheld gaming experience.",

  specifications: {
    brand: "Sony",
    model: "PlayStation Portal",
    color: "White",
    display: "8-inch LCD, 1080p, 60Hz",
    connectivity: "Wi-Fi, PlayStation Link",
    battery: "Up to 5-6 Hours",
    compatibility: "PlayStation 5 Remote Play",
    warranty: "12 Months",
  },

  reviews: [
    {
      name: "Temitope Adeyemi",
      rating: 5,
      comment:
        "Perfect for playing my PS5 while someone else is using the TV. Very comfortable to hold.",
      date: "21 July 2026",
    },
    {
      name: "Emeka Nwosu",
      rating: 4,
      comment:
        "Works really well with a strong Wi-Fi connection. Just remember that you need a PS5.",
      date: "26 July 2026",
    },
  ],
},
{
  id: 48,
  name: "Xbox Series X",
  category: "gaming",
  price: 900000,
  rating: 4.8,
  stock: 7,
  featured: true,
  image: xboxseriesx,
  images:[
  xboxseriesx,
  xboxseriesx,
  xboxseriesx,
  xboxseriesx,
  ], 
  description:
    "The Xbox Series X delivers powerful next-generation gaming with true 4K resolution, up to 120 FPS, a custom 1TB SSD, Quick Resume, and access to an extensive library of games.",

  specifications: {
    brand: "Microsoft",
    model: "Xbox Series X",
    color: "Black",
    storage: "1TB SSD",
    processor: "AMD Zen 2 8-Core CPU",
    graphics: "AMD RDNA 2 GPU",
    resolution: "Up to 4K 120Hz, 8K Supported",
    connectivity: "Wi-Fi, Bluetooth, Ethernet",
    warranty: "12 Months",
  },

  reviews: [
    {
      name: "Ibrahim Musa",
      rating: 5,
      comment:
        "Game Pass alone makes this console worth buying. Performance is top-notch.",
      date: "20 July 2026",
    },
    {
      name: "Ngozi Eze",
      rating: 4,
      comment:
        "Super fast console and Quick Resume is one of my favourite features.",
      date: "27 July 2026",
    },
  ],
},
{
  id: 49,
  name: "Nintendo Switch OLED",
  category: "gaming",
  price: 480000,
  rating: 4.8,
  stock: 14,
  featured: false,
  image: nintendoswitch,
   images:[
  nintendoswitch,
  nintendoswitch,
  nintendoswitch,
  nintendoswitch,
  ], 
  description:
    "Enjoy vibrant gaming with the Nintendo Switch OLED. Featuring a stunning 7-inch OLED display, enhanced audio, 64GB internal storage, and the flexibility to play in handheld, tabletop, or TV mode.",

  specifications: {
    brand: "Nintendo",
    model: "Switch OLED",
    color: "White",
    storage: "64GB",
    display: "7-inch OLED",
    battery: "4.5-9 Hours",
    connectivity: "Wi-Fi, Bluetooth",
    resolution: "720p Handheld / 1080p Docked",
    warranty: "12 Months",
  },

  reviews: [
    {
      name: "Blessing Udo",
      rating: 5,
      comment:
        "The OLED screen is beautiful. Mario Kart and Zelda look much better than on my old Switch.",
      date: "19 July 2026",
    },
    {
      name: "David Ogunleye",
      rating: 4,
      comment:
        "Great for travelling. Battery life is decent and the display is excellent.",
      date: "25 July 2026",
    },
  ],
},
{
  id: 50,
  name: "SteelSeries Arctis Nova 7 Wireless",
  category: "accessories",
  price: 280000,
  rating: 4.8,
  stock: 15,
  featured: false,
  image: steelseriesartis,
   images:[
     steelseriesartis,
     steelseriesartis,
     steelseriesartis,
     steelseriesartis,
  ], 
  description:
    "The SteelSeries Arctis Nova 7 Wireless is a premium gaming headset featuring powerful spatial audio, AI-powered noise-cancelling microphone, simultaneous 2.4GHz wireless and Bluetooth connectivity, and up to 38 hours of battery life.",

  specifications: {
    brand: "SteelSeries",
    model: "Arctis Nova 7 Wireless",
    color: "Black",
    connectivity: "2.4GHz Wireless, Bluetooth, USB-C",
    battery: "Up to 38 Hours",
    microphone: "AI Noise-Cancelling Retractable Mic",
    compatibility: "PC, PlayStation, Nintendo Switch, Mobile",
    warranty: "12 Months",
  },

  reviews: [
    {
      name: "Samuel Adebayo",
      rating: 5,
      comment:
        "Very comfortable for long gaming sessions. The microphone is crystal clear during multiplayer games.",
      date: "22 July 2026",
    },
    {
      name: "Kelechi Obi",
      rating: 4,
      comment:
        "Excellent sound quality and battery life. Switching between Bluetooth and my PC is seamless.",
      date: "28 July 2026",
    },
  ],
}
];
