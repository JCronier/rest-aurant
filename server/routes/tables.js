import express from 'express';

// Handlers.
import { createTable, getTables, updateTable } from '../controllers/tables.js'

// Create new Express Router.
const router = express.Router();

router.get('/', getTables);
router.post('/', createTable);
router.patch('/:id', updateTable);

export default router;