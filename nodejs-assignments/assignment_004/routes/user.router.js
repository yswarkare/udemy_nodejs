const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/registered', (req, res, next) => {
	try {
		const user = new User(req.body?.firstname, req.body?.lastname, req.body?.username, req.body?.email);
		user.save();
		res.redirect('/user/get-all');
	} catch (err) {
		res.redirect('/server-error');
	}
});

router.get('/registered', (req, res, next) => {
	try {
		res.redirect('/user/get-all');
	} catch (err) {
		res.redirect('/server-error');
	}
});

router.get('/get-all', (req, res, next) => {
	try {
		User.getAll((users) => {
			res.status(200).render('users', { title: 'Users', users: users });
		});
	} catch (err) {
		res.redirect('/server-error');
	}
});

module.exports = router;
