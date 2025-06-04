const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API для управління продуктами
 */

/**
 * @swagger
 * /api/products/category/{categoryName}:
 *   get:
 *     summary: Отримати продукти за категорією
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: categoryName
 *         schema:
 *           type: string
 *         required: true
 *         description: Назва категорії (наприклад: Smartphones)
 *     responses:
 *       200:
 *         description: Список продуктів у категорії
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/category/:categoryName', ProductController.getProductsByCategory);

/**
 * @swagger
 * /api/products/top/sales:
 *   get:
 *     summary: Отримати топ-3 товари за кількістю продажів
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Топ-3 продукти за кількістю продажів
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/top/sales', ProductController.getTopProductsBySales);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Створити новий продукт
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       201:
 *         description: Продукт створено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */
router.post('/', ProductController.createProduct);

module.exports = router;
