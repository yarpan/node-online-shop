# Node Online Shop API

A Node.js backend API for managing products, categories, and orders in an online store.

## Description

This project is a RESTful API built with Node.js and Express that allows creation and management of product listings, categories, and orders. It is designed for small to medium e-commerce platforms and supports structured MongoDB data storage, authentication (via JWT), and API documentation via Swagger.

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- Docker
- Swagger (for API docs)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourname/node-online-shop.git
cd node-online-shop
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Start the server:
```bash
npm run dev
```

## Environment Variables

Make sure to configure the following environment variables in your `.env` file:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/online-shop
JWT_SECRET=your_jwt_secret
```

## Project Structure

```
src/
├── config/               # Database and Swagger configuration
│   ├── db.js
│   └── swaggerSpec.js
├── controllers/          # Route handlers for business logic
│   ├── category.controller.js
│   ├── order.controller.js
│   └── product.controller.js
├── models/               # Mongoose models
│   ├── category.model.js
│   ├── order.model.js
│   └── product.model.js
├── routes/               # Express routes
│   ├── category.routes.js
│   ├── order.routes.js
│   └── product.routes.js
├── utils/                # Utility files (e.g. seed data)
│   └── seed.js
└── server.js             # Application entry point
```

## API Documentation

Interactive Swagger UI is available at:

📎 [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

### 📚 Available Endpoints

#### Categories
**Base path:** `/api/categories`

- `GET /api/categories`  
  Retrieve all product categories

- `POST /api/categories`  
  Create a new category

#### Products
**Base path:** `/api/products`

- `GET /api/products/category/{categoryName}`  
  Get products by category name (e.g. Smartphones)

- `GET /api/products/top/sales`  
  Retrieve top 3 best-selling products

- `POST /api/products`  
  Create a new product

#### Orders
**Base path:** `/api/orders`

- `GET /api/orders`  
  Retrieve all orders

- `POST /api/orders`  
  Create a new order

- `GET /api/orders/profit`  
  Calculate total profit from all orders

---

## Running Tests

> *(Testing not implemented at the moment)*


## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create your branch: `git checkout -b feature/feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature/feature-name`
5. Create a pull request

## Author

- Yaroslav Panchishyn — [yarpansoft@gmail.com](mailto:yarpansoft@gmail.com)
