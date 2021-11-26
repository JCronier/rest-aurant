import express from 'express';

//Handlers
import { getReceipts, createReceipt } from '../controllers/receipts.js';

//Create new express router
const router = express.Router();

router.get('/', getReceipts);
router.post('/', createReceipt);

export default router;