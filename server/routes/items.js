import express from 'express';

// Handlers
import { getItems, createItem, updateItem, deleteItem } from '../controllers/items.js';

// Create New Express Router
const router = express.Router();

// Routes
router.get('/', getItems);
router.post('/', createItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;