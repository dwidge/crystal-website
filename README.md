# React Shopping App

React Shopping App with Product List, Image Upload, and Basket Functionality

This is a simple React web application that allows users to browse a list of products stored in JSON format, add them to a shopping basket, and submit their order to a REST API. The app also enables users to upload images for each product, select the desired quantity of items, and provide personal information for delivery.

## Features

- View a list of products with details.
- Upload images or files for certain product types such as photo prints or 3D prints.
- Add products to the shopping basket.
- Adjust the quantity of items in the basket.
- Provide personal information including name, email, and delivery address.
- Submit the order to a REST API for processing.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dwidge/crystal-website.git
   cd crystal-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   This will start the React development server and open the app in your default web browser.

4. **Using the App:**

   - Browse the list of products on the main page.
   - To add a product to the basket, click the "Add to Basket" button below the product details.
   - Adjust the quantity of items in the basket using the quantity input field.
   - To upload an image for a product, click the "Upload Image" button and select an image file from your device.
   - Provide your name, email, and delivery address in the designated fields.
   - Once you're ready, click the "Submit Order" button to send your order to the REST API.

## API Integration

This app interfaces with a REST API to submit orders. To integrate it with your preferred API, locate the API endpoint within the codebase and replace it with the appropriate URL.

# License

Copyright DWJ 2023.  
Distributed under the Boost Software License, Version 1.0.  
https://www.boost.org/LICENSE_1_0.txt
