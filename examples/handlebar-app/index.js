const express = require('express');
const { PORT } = require('./config/config.js');
const handlebars = require('express-handlebars');
const { engine } = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const { fakeApi } = require('./data/fakeApi');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine(
	'hbs',
	engine({
    extname: 'hbs',
		defaultLayout: 'main',
		layoutsDir: __dirname + '/views/layouts',
		partialsDir: __dirname + '/views/partials/',
		devCommunityDir: __dirname + '/views/DevCommunity/',
	})
);

app.set('view engine', 'hbs');
app.set('views', './views/');
app.set('views', path.resolve(__dirname, './views/'));

app.get('/users', (req, res) => {
	res.render('home', { layout: 'main', title: 'Home Page', suggestedChamps: fakeApi(), listExists: true });
});

app.get('/10_Node_Qs', (req, res) => {
	res.render('home', { layout: '10_Node_Qs', title: '10 Node JS Interview Questions - DEV Community' });
});


app.get('/', (req, res) => {
	res.render('home', { layout: 'index', title: 'Home Page' });
});


app.listen(PORT, () => {
	console.log(`express-handlebars example server listening on: ${PORT}`);
});
