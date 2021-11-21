import express from 'express';

// Handlers.
import { getItems } from '../controllers/items.js'

// Create new Express Router.
const router = express.Router();

router.get('/', (getItems));

export default router;