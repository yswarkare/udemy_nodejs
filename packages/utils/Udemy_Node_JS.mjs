import { Section, calcProgress } from './Udemy_Node_JS_002.mjs';
import { consola } from "consola"

const arrList = {
	1: new Section(1, '00:40:00', 'Introduction'),
	2: new Section(2, '00:51:00', 'Optional: JavaScript - A Quick Refresher'),
	3: new Section(3, '01:33:00', 'Understanding the Basics'),
	4: new Section(4, '00:48:00', 'Improved Development Workflow and Debugging'),
	5: new Section(5, '01:34:00', 'Working Express.js'),
	6: new Section(6, '02:03:00', 'Working with Dynamic Content and Adding Templating Engines'),
	7: new Section(7, '00:44:00', 'The Model View Controller (MVC)'),
	8: new Section(8, '00:36:00', 'Optional: Enhancing the App'),
	9: new Section(9, '01:39:00', 'Dynamic Routes & Advanced Models'),
	10: new Section(10, '00:53:00', 'SQL Introduction'),
	11: new Section(11, '01:52:00', 'Understanding Sequelize'),
	12: new Section(12, '02:19:00', 'Working with noSQL & Using MongoBD'),
	13: new Section(13, '01:17:00', 'Working with Mongoose'),
	14: new Section(14, '01:13:00', 'Sessions & Cookies'),
	15: new Section(15, '01:10:00', 'Adding Authentication'),
	16: new Section(16, '00:10:00', 'Sending Emails'),
	17: new Section(17, '00:36:00', 'Advanced Authentication'),
	18: new Section(18, '01:16:00', 'Understanding Validation'),
	19: new Section(19, '00:48:00', 'Error Handling'),
	20: new Section(20, '01:11:00', 'File Upload and Download'),
	21: new Section(21, '00:26:00', 'Adding Pagination'),
	22: new Section(22, '00:26:00', 'Understanding Async Requests'),
	23: new Section(23, '00:29:00', 'Adding Payments'),
	24: new Section(24, '01:03:00', 'Working with REST APIs - The Basics'),
	25: new Section(25, '02:30:00', 'Working with REST APIs - The Practical Application'),
	26: new Section(26, '00:14:00', 'Understanding Async Await in Node.js'),
	27: new Section(27, '00:37:00', 'Understanding Websockets and socket.io'),
	28: new Section(28, '02:47:00', 'Working with GraphQL'),
	29: new Section(29, '01:02:00', 'Deploying Our App'),
	30: new Section(30, '01:42:00', 'Testing with Node.js Application'),
	31: new Section(31, '00:22:00', 'Node.js as a Build Tool & using npm'),
	32: new Section(32, '00:26:00', 'Modern JavaScript & Node.js'),
	33: new Section(33, '01:30:00', 'Node.js and TypeScript'),
	34: new Section(34, '01:34:00', 'An Introduction to Deno'),
	35: new Section(35, '00:38:00', 'Deno CRUD & Databases (MongoDB)'),
	36: new Section(36, '00:03:00', 'Roundup'),
};

const progress = calcProgress(arrList, 18, 24);
consola.success('Udemy Node.js');
console.table(progress);
