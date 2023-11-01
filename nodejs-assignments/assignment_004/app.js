const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const userRouter = require('./routes/user.router');
app.use('/user', userRouter);

app.use('/server-error', (req, res, next) => {
	res.status(500).render('errors/error', { code: 500, title: 'Server Error!', message: 'Please contact the service provider.' });
});

app.get('/', (req, res, next) => {
	res.status(200).render('home', { title: 'Home' });
});

app.use('', (req, res, next) => {
	res.status(404).render('errors/error', { code: 404, title: 'Page Not Found!', message: 'Please check the url path enter' });
});

app.listen(3000);
