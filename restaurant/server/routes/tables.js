import express from 'express';

// Handlers
import { getTables, createTable, updateTable, deleteTable } from '../controllers/tables.js';

// Create New Express Router
const router = express.Router();

// Routes
router.get('/', getTables);
router.post('/', createTable);
router.patch('/:id', updateTable);
router.delete('/:id', deleteTable);

export default router;