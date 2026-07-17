import api from "./api";

export type OrderItem = {
  product: string;
  name: string;
  price: number;
  quantity: number;
};

export type ShippingAddress = {
  street: string;
  city: string;
  state: string;
  country: string;
};

export type PlaceOrderPayload = {
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod?: "paystack" | "cod";
  couponCode?: string;
};

export const placeOrder = async (
  payload: PlaceOrderPayload
) => {
  const token = localStorage.getItem("token");

  const response = await api.post("/orders", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
export const initializePayment = async (
  orderId: string
) => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/payments/initialize",
    {
      orderId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const verifyPayment = async (
  reference: string
) => {
  const token = localStorage.getItem("token");

  const response = await api.get(
    `/payments/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};