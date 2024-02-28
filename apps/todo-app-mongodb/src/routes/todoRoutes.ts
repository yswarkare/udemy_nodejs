import { Router } from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controller/todoController';

const router = Router();

router.get('/get', getTodos);
router.post('/create', createTodo);
router.patch('/update', updateTodo);
router.delete('/delete', deleteTodo);

export default router;
