import express from 'express';

// Handlers.
import { getItems, createItem } from '../controllers/items.js'

// Create new Express Router.
const router = express.Router();

router.get('/', getItems);
router.post('/', createItem);

export default router;