import Todo from '../models/Todo';

const getTodos = async (req: any, res: any) => {
	try {
		let todos = await Todo.find();
		return res.status(201).json({ success: true, message: '', data: todos });
	} catch (error) {
		throw error;
	}
};

const createTodo = async (req: any, res: any) => {
	try {
		const body = req.body;
		console.info({ body });
		const todo = {
			title: req.body.title,
			description: req.body.description,
		};
		await Todo.create(todo);
		return res.status(201).json({ success: true, message: '', data: {} });
	} catch (error) {
		throw error;
	}
};

const updateTodo = async (req: any, res: any) => {
	try {
		const todoId = req.params.todoId;
		console.info({ todoId });
		const body = req.body;
		console.info({ body });
		let existing = await Todo.findById({ _id: todoId });
		const updated = {
			...existing,
			title: req.body.title,
			description: req.body.description,
		};
		await Todo.updateOne({ updated });
		return res.status(201).json({ success: true, message: '', data: {} });
	} catch (error) {
		throw error;
	}
};

const deleteTodo = async (req: any, res: any) => {
	try {
		const todoId = req.params.todoId;
		console.info({ todoId });
		const body = req.body;
		console.info({ body });
		const deleted = await Todo.deleteOne({ _id: todoId });
		return res.status(201).json({ success: true, message: '', data: deleted });
	} catch (error) {
		throw error;
	}
};

export { getTodos, createTodo, updateTodo, deleteTodo };
