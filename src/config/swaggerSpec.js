// swaggerSpec.js

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Online Shop API',
      version: '1.0.0',
      description: 'Документація API для онлайн-магазину',
    },
    components: {
      schemas: {
        // ---------- Category Schemas ----------
        Category: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Унікальний ідентифікатор категорії',
            },
            name: {
              type: 'string',
              description: 'Назва категорії',
            },
          },
          example: {
            _id: '60c72b2f9b1d4c001c8e4b0a',
            name: 'Smartphones',
          },
        },
        CategoryInput: {
          type: 'object',
          required: ['name'],
          properties: {
            name: {
              type: 'string',
              description: 'Назва нової категорії',
            },
          },
          example: {
            name: 'Smartphones',
          },
        },

        // ---------- Product Schemas ----------
        Product: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Унікальний ідентифікатор продукту',
            },
            name: {
              type: 'string',
              description: 'Назва продукту',
            },
            price: {
              type: 'number',
              description: 'Ціна продукту',
            },
            category: {
              type: 'string',
              description: 'Назва категорії, до якої належить продукт',
            },
            stock: {
              type: 'integer',
              description: 'Кількість одиниць на складі',
            },
            sold: {
              type: 'integer',
              description: 'Кількість проданих одиниць',
            },
          },
          example: {
            _id: '60d21b967db29c001c8e4f8a',
            name: 'iPhone 14',
            price: 999.99,
            category: 'Smartphones',
            stock: 20,
            sold: 15,
          },
        },
        ProductInput: {
          type: 'object',
          required: ['name', 'price', 'category', 'stock'],
          properties: {
            name: {
              type: 'string',
              description: 'Назва продукту',
            },
            price: {
              type: 'number',
              description: 'Ціна продукту',
            },
            category: {
              type: 'string',
              description: 'Назва категорії, до якої належить продукт',
            },
            stock: {
              type: 'integer',
              description: 'Кількість одиниць на складі',
            },
          },
          example: {
            name: 'iPhone 14',
            price: 999.99,
            category: 'Smartphones',
            stock: 20,
          },
        },

        // ---------- Order Schemas ----------
        Order: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Унікальний ідентифікатор замовлення',
            },
            products: {
              type: 'array',
              description: 'Список товарів у замовленні',
              items: {
                type: 'object',
                properties: {
                  product: {
                    type: 'string',
                    description: 'ID продукту',
                  },
                  quantity: {
                    type: 'integer',
                    description: 'Кількість одиниць цього продукту',
                  },
                },
              },
            },
            totalPrice: {
              type: 'number',
              description: 'Загальна вартість замовлення',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Дата й час створення замовлення',
            },
          },
          example: {
            _id: '60d21b967db29c001c8e4f8b',
            products: [
              {
                product: '60d21b4667d0d8992e610c85',
                quantity: 2,
              },
            ],
            totalPrice: 299.99,
            createdAt: '2023-06-04T14:48:00.000Z',
          },
        },
        OrderInput: {
          type: 'object',
          required: ['products', 'totalPrice'],
          properties: {
            products: {
              type: 'array',
              description: 'Список товарів у замовленні',
              items: {
                type: 'object',
                properties: {
                  product: {
                    type: 'string',
                    description: 'ID продукту',
                  },
                  quantity: {
                    type: 'integer',
                    description: 'Кількість одиниць цього продукту',
                  },
                },
              },
            },
            totalPrice: {
              type: 'number',
              description: 'Загальна вартість замовлення',
            },
          },
          example: {
            products: [
              {
                product: '60d21b4667d0d8992e610c85',
                quantity: 2,
              },
            ],
            totalPrice: 299.99,
          },
        },
      },
    },
  },
  // Шляхи до файлів, де знаходяться Swagger-анотації маршрутів
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
