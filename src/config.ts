const {
  PUBLIC_URL = ".",
  PUBLIC_TITLE = "App",
  PUBLIC_EMAIL = "info@example.com",
  PUBLIC_PHONE = "00000000",
  PUBLIC_CURRENCY = "$",
  PUBLIC_API_URL = "http://localhost/v1",
  PUBLIC_DATA_URL = "data",
} = process.env;

const app = {
  title: PUBLIC_TITLE,
  email: PUBLIC_EMAIL,
  phone: PUBLIC_PHONE,
  currency: PUBLIC_CURRENCY,
  rootUrl: PUBLIC_URL,
  dataUrl: PUBLIC_DATA_URL,
};
const api = { url: PUBLIC_API_URL };

export const config = { app, api };
