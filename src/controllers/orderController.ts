import { Request, Response } from "express";

export interface OrderItem {
  productId: string | number;
  name: string;
  price: number;
  quantity: number;
}

export interface CreateOrderRequestBody {
  items: OrderItem[];
  shippingAddress: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country?: string;
  };
  paymentMethod: "paystack" | "flutterwave" | "card" | "cod";
  currency?: string;
}

// Delivery fee rule: Enugu = ₦2,000 per item; Other states = ₦5,000 per item
const calculateDeliveryFee = (state: string, totalItemsCount: number): number => {
  const normalizedState = state.trim().toLowerCase();
  const perItemFee = (normalizedState === "enugu" || normalizedState === "enugu state") ? 2000 : 5000;
  return perItemFee * totalItemsCount;
};

export const createOrder = async (req: Request<{}, {}, CreateOrderRequestBody>, res: Response) => {
  try {
    const { items, shippingAddress, paymentMethod, currency = "NGN" } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, message: "Cart items cannot be empty." });
    }

    if (!shippingAddress || !shippingAddress.state) {
      return res.status(400).json({ success: false, message: "Shipping state is required." });
    }

    const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const shippingFee = calculateDeliveryFee(shippingAddress.state, totalItemsCount);
    const grandTotal = subtotal + shippingFee;

    const newOrder = {
      orderId: `ORD-${Date.now()}`,
      items,
      shippingAddress,
      paymentMethod,
      currency,
      subtotal,
      shippingFee,
      grandTotal,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Server error processing order",
      error: error.message,
    });
  }
};