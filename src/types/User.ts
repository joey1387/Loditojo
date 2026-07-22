export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  gender?: string;
  avatar?: string;
  address?: string;
  rewardPoints?: number;
  createdAt?: string;
}