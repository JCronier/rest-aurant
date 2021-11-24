import express from 'express';

// Handlers.
import { createTable, getTables } from '../controllers/tables.js'

// Create new Express Router.
const router = express.Router();

router.get('/', getTables);
router.post('/', createTable);

export default router;