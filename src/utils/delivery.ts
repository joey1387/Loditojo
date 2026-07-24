export const ENUGU_PER_ITEM_FEE = 2000;
export const STANDARD_PER_ITEM_FEE = 5000;

export const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
  "Taraba", "Yobe", "Zamfara"
];

/**
 * Calculates delivery fee based on selected state and total quantity of items in cart.
 * @param state Selected state name
 * @param totalItemQuantity Total count/quantity of products in cart
 * @returns Total shipping fee in NGN
 */
export const calculateDeliveryFee = (state: string, totalItemQuantity: number): number => {
  if (totalItemQuantity <= 0) return 0;

  const normalizedState = state.trim().toLowerCase();
  const perItemFee = (normalizedState === "enugu" || normalizedState === "enugu state")
    ? ENUGU_PER_ITEM_FEE
    : STANDARD_PER_ITEM_FEE;

  return perItemFee * totalItemQuantity;
};