const http = require('http');

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

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<h2>Hello to my server!</h2>');
	} else if (url === '/users') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<ul>');
		for (let i = 0; i < usersList.length; i++) {
			const user = usersList[i];
			res.write(`<li>${user.firstname} ${user.lastname}</li>`);
		}
		res.write('</ul>');
	} else if (url === '/create-user') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<form method="POST">');
		res.write('<input type="text" name="username">');
		res.write('</input>');
		res.write('<input type="submit">');
		res.write('</input>');
		res.write('</form>');
		console.log(method);
		if (method === 'POST') {
			const body = [];
			req.on('data', (data) => {
				body.push(data);
			});
			req.on('end', function () {
				const username = new Buffer.concat(body).toString();
				console.log(username);
			});
		}
	}
	return res.end();
});

server.listen(3000);
