import express from 'express';

// Handlers.
import { getOrders, createOrder, updateOrder, updateOrderStatus, putOrder } from '../controllers/orders.js';

// Create new Express Router.
const router = express.Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.patch('/:id', updateOrder);
router.patch('/status/:id', updateOrderStatus);
router.put('/:id', putOrder);

export default router;