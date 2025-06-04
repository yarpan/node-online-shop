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

[http://localhost:5000/api-docs](http://localhost:5000/api-docs)

Documentation includes endpoints for:

- Creating and fetching products by category
- Placing orders and calculating total profit
- Managing categories
- Fetching top-selling products

## Running Tests

> *(Testing scripts not included by default. Add test framework like Jest or Mocha for this section.)*

```bash
npm run test
```

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
