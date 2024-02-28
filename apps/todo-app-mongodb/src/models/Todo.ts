import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = new Schema({
	title: { type: String, min: 4, max: 100, required: true },
	description: { type: String, min: 4, max: 2000 },
});

const Todo = mongoose.model('todos', todoSchema);

export default Todo;
