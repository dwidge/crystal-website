const {
  PUBLIC_URL = ".",
  PUBLIC_TITLE = "App",
  PUBLIC_EMAIL = "info@example.com",
  PUBLIC_PHONE = "00000000",
  PUBLIC_CURRENCY = "$",
  PUBLIC_API_URL = "http://localhost/v1",
} = process.env;

export const app = {
  root: PUBLIC_URL,
  title: PUBLIC_TITLE,
  email: PUBLIC_EMAIL,
  phone: PUBLIC_PHONE,
  currency: PUBLIC_CURRENCY,
};
export const api = { url: PUBLIC_API_URL };
