import React from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './src/Pages/Homepage/Home';
import Shop from './src/Pages/Shop/Shop';
import Cart from './src/Pages/Cart/Cart';
import Checkout from './src/Pages/Checkout/Checkout';
import Login from './src/Pages/Login/Login';
import Register from './src/Pages/Register/Register';
import NotFound from './src/Pages/NotFound/NotFound';
import Navbar  from './src/Components/Navbar/Navbar';  
import ProductDetails from "./src/Pages/ProductDetails/ProductDetails";
import ProtectedRoute from "./src/Components/ProtectedRoute/ProtectedRoute"; 
import Success from "./src/Pages/Success/Success";
import Footer from './src/Components/Footer/Footer';
import About from "./src/Pages/About/About";
import Contact from "./src/Pages/Contact/Contact";
import ForgotPassword from "./src/Pages/ForgotPassword/ForgotPassword";
import VerifyOTP from "./src/Pages/VerifyOTP/VerifyOTP";
import ResetPassword from "./src/Pages/ResetPassword/ResetPassword";
import Wishlist from "./src/Pages/Wishlist/Wishlist";
import Compare from "./src/Pages/Compare/Compare";
import AIChat from "./src/Components/AIChat/AIChat";
import OrderTracking from "./src/Pages/OrderTracking/OrderTracking";
import OrderHistory from "./src/Pages/OrderHistory/OrderHistory";
import PaymentVerify from "./src/Pages/PaymentVerify/PaymentVerify";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id"element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
       <Route path="/checkout"element={
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  }
/>
<Route
  path="/compare"
  element={<Compare />}
/>
<Route
  path="/track-order"
  element={<OrderTracking />}
/>
<Route
  path="/payment/verify"
  element={<PaymentVerify />}
/>

<Route
  path="/orders"
  element={
    <ProtectedRoute>
      <OrderHistory />
    </ProtectedRoute>
  }
/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/verify-otp" element={<VerifyOTP />} />

        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/success" element={<Success />} />
        <Route
   path="/wishlist"
   element={<Wishlist />}
/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <AIChat />

      <Footer />
    </>
  );
}

export default App;