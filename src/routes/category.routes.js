const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category.controller');

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: API для управління категоріями
 */

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Отримати список усіх категорій
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Успішне отримання списку категорій
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.get('/', CategoryController.getCategories);

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Створити нову категорію
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryInput'
 *     responses:
 *       201:
 *         description: Категорію створено
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
router.post('/', CategoryController.createCategory);

module.exports = router;

