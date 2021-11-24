import express from 'express';

// Handlers
import { getOrders, updateOrder } from '../controllers/orders.js';

// Create New Express Router
const router = express.Router();

// Routes
router.get('/', getOrders);
router.patch('/:id', updateOrder);

export default router;