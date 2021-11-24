import express from 'express';

// Handlers
import { getOrders, createOrder, updateOrder } from '../controllers/orders.js';

// Create New Express Router
const router = express.Router();

// Routes
router.get('/', getOrders);
router.post('/', createOrder);
router.patch('/:id', updateOrder);

export default router;