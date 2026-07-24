// src/context/CurrencyContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// 1. Defined Currencies
export type Currency =
  | "NGN" // Nigerian Naira
  | "USD" // US Dollar
  | "EUR" // Euro
  | "GBP" // British Pound Sterling
  | "GHS" // Ghanaian Cedi
  | "CAD" // Canadian Dollar
  | "AUD" // Australian Dollar
  | "CHF" // Swiss Franc
  | "JPY" // Japanese Yen
  | "CNY" // Chinese Yuan
  | "SEK" // Swedish Krona
  | "AED" // UAE Dirham
  | "SAR" // Saudi Riyal
  | "ZAR" // South African Rand
  | "KES" // Kenyan Shilling
  | "EGP" // Egyptian Pound
  | "INR" // Indian Rupee
  | "SGD" // Singapore Dollar
  | "NZD" // New Zealand Dollar
  | "HKD" // Hong Kong Dollar
  | "NOK" // Norwegian Krone
  | "DKK" // Danish Krone
  | "BRL" // Brazilian Real
  | "MXN" // Mexican Peso
  | "PLN" // Polish Zloty
  | "THB" // Thai Baht
  | "TRY" // Turkish Lira
  | "KWD" // Kuwaiti Dinar
  | "BHD" // Bahraini Dinar
  | "OMR"; // Omani Rial

export interface CurrencyDetails {
  rateFromNGN: number; // Exchange rate relative to base NGN
  symbol: string;
  decimals: number;
  name: string;
  country: string;
}

// 2. Exchange Rates & Symbol Configuration Table
export const CURRENCY_MAP: Record<Currency, CurrencyDetails> = {
  NGN: { rateFromNGN: 1, symbol: "₦", decimals: 0, name: "Nigerian Naira", country: "Nigeria" },
  USD: { rateFromNGN: 0.00067, symbol: "$", decimals: 2, name: "US Dollar", country: "United States" },
  EUR: { rateFromNGN: 0.00062, symbol: "€", decimals: 2, name: "Euro", country: "Eurozone" },
  GBP: { rateFromNGN: 0.00052, symbol: "£", decimals: 2, name: "British Pound", country: "United Kingdom" },
  GHS: { rateFromNGN: 0.0102, symbol: "GH₵", decimals: 2, name: "Ghanaian Cedi", country: "Ghana" },
  CAD: { rateFromNGN: 0.00091, symbol: "CA$", decimals: 2, name: "Canadian Dollar", country: "Canada" },
  AUD: { rateFromNGN: 0.0101, symbol: "A$", decimals: 2, name: "Australian Dollar", country: "Australia" },
  CHF: { rateFromNGN: 0.00059, symbol: "CHF", decimals: 2, name: "Swiss Franc", country: "Switzerland" },
  JPY: { rateFromNGN: 0.103, symbol: "¥", decimals: 0, name: "Japanese Yen", country: "Japan" },
  CNY: { rateFromNGN: 0.0048, symbol: "¥", decimals: 2, name: "Chinese Yuan", country: "China" },
  SEK: { rateFromNGN: 0.0071, symbol: "kr", decimals: 2, name: "Swedish Krona", country: "Sweden" },
  AED: { rateFromNGN: 0.00246, symbol: "AED", decimals: 2, name: "UAE Dirham", country: "United Arab Emirates" },
  SAR: { rateFromNGN: 0.00251, symbol: "SR", decimals: 2, name: "Saudi Riyal", country: "Saudi Arabia" },
  ZAR: { rateFromNGN: 0.0123, symbol: "R", decimals: 2, name: "South African Rand", country: "South Africa" },
  KES: { rateFromNGN: 0.086, symbol: "KSh", decimals: 2, name: "Kenyan Shilling", country: "Kenya" },
  EGP: { rateFromNGN: 0.032, symbol: "E£", decimals: 2, name: "Egyptian Pound", country: "Egypt" },
  INR: { rateFromNGN: 0.056, symbol: "₹", decimals: 2, name: "Indian Rupee", country: "India" },
  SGD: { rateFromNGN: 0.0009, symbol: "S$", decimals: 2, name: "Singapore Dollar", country: "Singapore" },
  NZD: { rateFromNGN: 0.011, symbol: "NZ$", decimals: 2, name: "New Zealand Dollar", country: "New Zealand" },
  HKD: { rateFromNGN: 0.0052, symbol: "HK$", decimals: 2, name: "Hong Kong Dollar", country: "Hong Kong" },
  NOK: { rateFromNGN: 0.0072, symbol: "kr", decimals: 2, name: "Norwegian Krone", country: "Norway" },
  DKK: { rateFromNGN: 0.0046, symbol: "kr.", decimals: 2, name: "Danish Krone", country: "Denmark" },
  BRL: { rateFromNGN: 0.0037, symbol: "R$", decimals: 2, name: "Brazilian Real", country: "Brazil" },
  MXN: { rateFromNGN: 0.0121, symbol: "MEX$", decimals: 2, name: "Mexican Peso", country: "Mexico" },
  PLN: { rateFromNGN: 0.0027, symbol: "zł", decimals: 2, name: "Polish Zloty", country: "Poland" },
  THB: { rateFromNGN: 0.024, symbol: "฿", decimals: 2, name: "Thai Baht", country: "Thailand" },
  TRY: { rateFromNGN: 0.022, symbol: "₺", decimals: 2, name: "Turkish Lira", country: "Turkey" },
  KWD: { rateFromNGN: 0.000205, symbol: "KD", decimals: 3, name: "Kuwaiti Dinar", country: "Kuwait" },
  BHD: { rateFromNGN: 0.000252, symbol: "BD", decimals: 3, name: "Bahraini Dinar", country: "Bahrain" },
  OMR: { rateFromNGN: 0.000258, symbol: "OMR", decimals: 3, name: "Omani Rial", country: "Oman" },
};

export const SUPPORTED_CURRENCIES = CURRENCY_MAP;

// Eurozone country mapping
const EUROZONE = ["AT", "BE", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PT", "SK", "SI", "ES"];

// 3. Country-to-Currency Map for automatic detection
export const COUNTRY_TO_CURRENCY: Record<string, Currency> = {
  NG: "NGN",
  US: "USD",
  GB: "GBP",
  GH: "GHS",
  CA: "CAD",
  AU: "AUD",
  CH: "CHF",
  JP: "JPY",
  CN: "CNY",
  SE: "SEK",
  AE: "AED",
  SA: "SAR",
  ZA: "ZAR",
  KE: "KES",
  EG: "EGP",
  IN: "INR",
  SG: "SGD",
  NZ: "NZD",
  HK: "HKD",
  NO: "NOK",
  DK: "DKK",
  BR: "BRL",
  MX: "MXN",
  PL: "PLN",
  TH: "THB",
  TR: "TRY",
  KW: "KWD",
  BH: "BHD",
  OM: "OMR",
};

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  formatPrice: (priceInNGN: number) => string;
  symbol: string;
  supportedCurrencies: Currency[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>("NGN");

  useEffect(() => {
    // 1. Primary IP Lookup via ipapi.co
    fetch("https://ipapi.co/json/")
      .then((res) => {
        if (!res.ok) throw new Error("Primary GeoIP service failed");
        return res.json();
      })
      .then((data) => {
        const country = data.country_code;

        if (EUROZONE.includes(country)) {
          setCurrency("EUR");
        } else if (COUNTRY_TO_CURRENCY[country]) {
          setCurrency(COUNTRY_TO_CURRENCY[country]);
        } else {
          setCurrency("USD");
        }
      })
      .catch(() => {
        // 2. Fallback to your Express backend if client IP lookup fails or is blocked
        const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
        fetch(`${API_BASE}/api/auth/location`)
          .then((res) => res.json())
          .then((data) => {
            if (data.currency && CURRENCY_MAP[data.currency as Currency]) {
              setCurrency(data.currency as Currency);
            } else {
              setCurrency("NGN");
            }
          })
          .catch(() => {
            setCurrency("NGN");
          });
      });
  }, []);

  const formatPrice = (priceInNGN: number): string => {
    const config = CURRENCY_MAP[currency] || CURRENCY_MAP.NGN;
    const converted = priceInNGN * config.rateFromNGN;

    const formattedNumber = converted.toLocaleString(undefined, {
      minimumFractionDigits: config.decimals,
      maximumFractionDigits: config.decimals,
    });

    return `${config.symbol}${formattedNumber}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        symbol: CURRENCY_MAP[currency]?.symbol || "₦",
        supportedCurrencies: Object.keys(CURRENCY_MAP) as Currency[],
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};