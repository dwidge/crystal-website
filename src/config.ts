const {
  PUBLIC_URL = ".",
  PUBLIC_TITLE = "App",
  PUBLIC_EMAIL = "info@example.com",
  PUBLIC_PHONE = "00000000",
} = process.env;

export const app = {
  root: PUBLIC_URL,
  title: PUBLIC_TITLE,
  email: PUBLIC_EMAIL,
  phone: PUBLIC_PHONE,
};
