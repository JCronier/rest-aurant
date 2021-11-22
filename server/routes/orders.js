import express from 'express';

// Handlers.
import { getOrders, createOrder, updateOrder } from '../controllers/orders.js'

// Create new Express Router.
const router = express.Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.patch('/:id', updateOrder);

export default router;