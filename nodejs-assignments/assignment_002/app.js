const express = require('express');

const usersList = [
	{
		firstname: 'Jack',
		lastname: 'Parsons',
		username: 'jackparsons',
	},
	{
		firstname: 'Carl',
		lastname: 'Sagan',
		username: 'carlsagan',
	},
	{
		firstname: 'Dan',
		lastname: 'Cooper',
		username: 'dancooper',
	},
];

const app = express();

app.use('/users', (req, res, next) => {
	let strData = '<ul>';
	for (let i = 0; i < usersList.length; i++) {
		const user = usersList[i];
		strData += `<li>${user.firstname} ${user.lastname}</li>`;
	}
	strData += '</ul>';
	res.send(strData);
	next();
});

app.use('/create-user', (req, res, next) => {
	let formData =
		'<html><body><form action="/create-user" method="POST"><input type="text" name="username"></input><input type="submit"></input></form></body></html>';
	const method = req.method;
	if (method === 'POST') {
		const body = [];
		req.on('data', (data) => {
			body.push(data);
		});
		req.on('end', function () {
			const data = new Buffer.concat(body).toString();
			const username = data.split('=')[1];
			console.log(username);
		});
	}
	res.send(formData);
	next();
});

app.use('/', (req, res, next) => {
	res.send('<h2>Hello from my server app!</h2>');
	next();
});

app.listen(3000);
