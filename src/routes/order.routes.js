const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order.controller');

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API для управління замовленнями
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Отримати всі замовлення
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Список замовлень
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/', OrderController.getOrders);

/**
 * @swagger
 * /api/orders/profit:
 *   get:
 *     summary: Отримати загальний прибуток з усіх замовлень
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Загальний прибуток
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalProfit:
 *                   type: number
 *                   example: 1000.50
 */
router.get('/profit', OrderController.getTotalProfit);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Створити нове замовлення
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderInput'
 *     responses:
 *       201:
 *         description: Замовлення створено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
router.post('/', OrderController.createOrder);

module.exports = router;

