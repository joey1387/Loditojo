import api from "./api";

export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};

export const registerUser = async (data: any) => {
  const response = await api.post("/auth/register", data);

  return response.data;
};

export const verifyOtpApi = async (email: string, otp: string, purpose = "email-verification") => {
  const response = await api.post("/auth/otp/verify", {
    email,
    otp,
    purpose,
  });

  return response.data;
};

export const resendOtpApi = async (email: string, purpose = "email-verification") => {
  const response = await api.post("/auth/otp/resend", {
    email,
    purpose,
  });

  return response.data;
};

export const getUserLocationApi = async () => {
  const response = await api.get("/auth/location");
  return response.data;
};