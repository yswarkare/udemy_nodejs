const path = require('path');
const fs = require('fs');

const userDir = path.resolve(__dirname, '../data/users.json');

const getAllUsers = (cb) => {
	fs.readFile(userDir, 'utf8', (err, data) => {
		if (err) console.log({ err });
		console.log({ data });
		if (data?.length > 0) {
			let users = JSON.parse(data);
			cb(users);
		} else {
			cb([]);
		}
	});
};

class User {
	constructor(firstname, lastname, username, email) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.username = typeof username === 'string' ? username.toLowerCase() : username;
		this.email = typeof email === 'string' ? email.toLowerCase() : email;
		this.id = parseInt(Math.random() * 1000);
	}

	static getAll(cb) {
		getAllUsers(cb);
	}

	save() {
		getAllUsers((users) => {
			console.log({ users });
			let user = users.find((user) => user.username === this.username || user.email === this.email);
			if (!user) {
				users.push(this);
				fs.writeFile(userDir, JSON.stringify(users), (err) => {
					console.log(err);
				});
				return true;
			} else {
				return false;
			}
		});
	}
}

module.exports = User;

// getUser(key, value) {
// 	let users = fs.readFile();
// 	let user = users.find((user) => user[key] === value);
// 	if (user) {
// 		return user;
// 	} else return null;
// }

// getUserByUsername(username) {
// 	getUser('username', username);
// }

// getUserByEmail(email) {
// 	getUser('email', email);
// }

// userExists(newUser) {
// 	let users = fs.readFile();
// 	let user = users.find((user) => user.username === newUser.username || user.email === newUser.email);
// 	if (user) {
// 		return user;
// 	} else return false;
// }
