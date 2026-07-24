// Your botReplies object (with default fallback exported separately or integrated)
export const botReplies: Record<string, string> = {
  hello: "Hello! Welcome to Loditojo Gadgets. How can I help you today?",
  hi: "Hi there! How may I assist you today?",
  hey: "Hello! Welcome to Loditojo Gadgets. What can I do for you?",
  thanks: "You're welcome! Is there anything else I can help you with?",
  thank: "Happy to help! Feel free to ask if you have any other questions.",
  bye: "Thank you for visiting Loditojo Gadgets. Have a wonderful day!",
  goodbye: "Goodbye! We look forward to serving you again.",

  // Specific Multi-word checks (Put multi-word keys higher or let keyword logic match them)
  best_iphone: "Our top-recommended iPhones include the iPhone 15 Pro Max and iPhone 15 for peak performance, as well as the iPhone 13/14 models for great value. Search 'iPhone' in our store to see available stock!",
  best_laptop: "For power and mobility, we highly recommend the Apple MacBook Air M2/M3, Dell XPS, and HP Spectre. For gaming or heavy computing, check out our ASUS ROG and Lenovo Legion lineups!",
  best_watch: "For iOS users, the Apple Watch Series 9 and Ultra 2 are top picks! For Android or universal compatibility, we recommend the Samsung Galaxy Watch series and Oraimo smartwatches.",

  recommend: "Looking for recommendations? Check out our 'Featured Products' and 'Deals' pages on the website for top-rated iPhones, flagship laptops, and smartwatches!",
  watch: "We stock top-grade smartwatches, including the Apple Watch, Samsung Galaxy Watch, and popular fitness trackers. Check our Accessories section to explore models!",
  smartwatch: "Explore our collection of smartwatches featuring health tracking, notification sync, and long battery life from Apple, Samsung, and top accessory brands.",

  purple: "Purple represents luxury, innovation, and trust—reflecting our commitment to delivering top-tier, reliable gadgets and a modern shopping experience!",
  color: "Our signature purple theme highlights our goal: bringing high-end tech, premium quality, and exceptional service straight to you.",
  loditojo: "Loditojo Gadgets is your premier store for 100% authentic tech, smartphones, laptops, and accessories across Nigeria.",
  about: "Loditojo Gadgets is dedicated to providing genuine consumer electronics with fast shipping, solid warranties, and great support.",

  order: "To place an order, add your chosen items to your cart, go to checkout, fill in your delivery details, and complete payment.",
  buy: "Browse our collections, click 'Add to Cart', and proceed to Checkout to finalize your purchase.",
  checkout: "At checkout, you'll enter your shipping address, choose your preferred payment method, and confirm your order.",
  cart: "You can view, edit quantities, or remove items from your cart anytime by clicking the shopping cart icon at the top of the page.",
  track: "Once your order is processed, you'll receive status updates. You can also view order status in your user profile.",
  status: "You can check your order status under 'My Orders' in your account dashboard or contact customer support for real-time updates.",
  cancel: "To cancel an order before it ships, please reach out to our support team as soon as possible with your Order ID.",

  payment: "We accept Paystack (cards, bank transfers, USSD) and Cash on Delivery where available. All transactions are fully encrypted.",
  pay: "You can securely pay via Paystack using your debit card, transfer, or USSD code safely.",
  coupon: "Have a discount code? Enter it in the coupon box during checkout to apply your savings instantly!",
  promo: "We regularly run promotional offers! Apply your promo code at checkout or check our homepage for ongoing deals.",
  discount: "Check our homepage and featured products for current promotions and sales events.",
  price: "All prices listed on our product pages are transparent and up to date.",

  delivery: "We deliver nationwide across Nigeria! Lagos deliveries take 24–48 hours, while other states take 2–5 working days.",
  shipping: "Shipping costs vary depending on your location and total item weight, calculated automatically at checkout.",
  location: "Loditojo Gadgets operates out of Lagos, Nigeria, and delivers to every state nationwide.",
  dispatch: "Orders are processed and dispatched within 24 hours of payment verification on business days.",

  authentic: "100% genuine! Every gadget sold at Loditojo Gadgets is brand new, original, and sourced directly from official distributors.",
  original: "Yes. Every product we list is guaranteed original, brand new, and covered by official backing.",
  genuine: "We strictly sell authentic tech. No refurbished, fake, or clone devices.",
  warranty: "Most gadgets include an official manufacturer warranty. The specific warranty period is listed on each product page.",
  repair: "Items covered under warranty can be repaired or replaced following the manufacturer's official service guidelines.",

  refund: "Refunds are issued after returned items are inspected and verified according to our return policy.",
  refunds: "Approved refunds are processed back to your original payment method within 3–5 business days.",
  return: "Eligible items can be returned within our valid return window provided they remain in original condition with packaging intact.",
  exchange: "We offer exchanges for eligible items if you receive a defective unit or need a different specification.",

  phone: "We offer smartphones from Apple, Samsung, Google Pixel, Xiaomi, Tecno, Infinix, and other leading tech brands.",
  iphone: "We carry authentic Apple iPhones—all brand new, factory unlocked, and bundled with standard warranty.",
  samsung: "Explore our collection of Samsung Galaxy smartphones, tablets, smartwatches, and accessories.",
  laptop: "We stock laptops from Apple, Dell, HP, Lenovo, ASUS, and Acer for gaming, work, or school.",
  macbook: "We offer genuine Apple MacBooks (Air and Pro models) with standard Apple warranty support.",
  gaming: "Check out our gaming lineup, including PlayStation consoles, Xbox, Nintendo Switch, controllers, and headsets.",
  accessories: "We stock chargers, power banks, wireless earbuds, smartwatches, phone cases, cables, and PC accessories.",
  featured: "Browse our 'Featured Products' section on the homepage to see our top-rated gadgets and best sellers.",
  deals: "Looking for a deal? Visit our 'Deals & Discounts' section for limited-time offers and bundle savings.",

  account: "You can manage your profile, view order history, and manage delivery addresses directly from your Account Dashboard.",
  register: "Creating an account is quick and easy! Click 'Sign Up' at the top of the page to get started.",
  password: "Forgot your password? Click 'Forgot Password' on the login screen to receive a reset link via email.",
  seller: "Interested in selling on our platform? Submit an application through your user dashboard to become an approved seller.",

  customer: "Our customer support team is available Monday through Saturday to help with purchases, order tracking, and technical inquiries.",
  support: "Need assistance? Our support team is ready to help you before, during, and after your purchase.",
  care: "Your satisfaction matters to us! Reach out to us anytime with questions or feedback.",
  contact: "You can contact us through our Contact Us page, send an email to our support team, or message us here.",
  email: "Feel free to email our customer support team directly using the contact details on our Contact page.",
  hours: "Our support team operates Monday to Saturday, from 8:00 AM to 6:00 PM.",
};

// --- Helper Function to Get Response ---
export const getBotReply = (userMessage: string): string => {
  const cleanInput = userMessage.toLowerCase().trim();

  // 1. Check for specific multi-word combinations first
  if (cleanInput.includes("best iphone") || cleanInput.includes("top iphone")) {
    return botReplies.best_iphone;
  }
  if (cleanInput.includes("best laptop") || cleanInput.includes("top laptop")) {
    return botReplies.best_laptop;
  }
  if (cleanInput.includes("best watch") || cleanInput.includes("top watch") || cleanInput.includes("best smartwatch")) {
    return botReplies.best_watch;
  }

  // 2. Iterate through single keywords
  for (const keyword of Object.keys(botReplies)) {
    // Avoid matching 'best_iphone', 'best_laptop', 'best_watch' directly in string search
    if (keyword.includes("_")) continue;

    // Word boundary check or simple includes check
    if (cleanInput.includes(keyword)) {
      return botReplies[keyword];
    }
  }

  // 3. Return Fallback if no keywords matched
  return "I'm sorry, I didn't quite catch that. You can ask me about our products, delivery options, payment methods, warranty, or returns!";
};

export default botReplies;