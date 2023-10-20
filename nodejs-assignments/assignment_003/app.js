const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const rootDir = require('./utils/path');

app.use('/', (req, res, next) => {
	res.status(200).sendFile(path.join(rootDir, '/views', '/home.html'));
});

app.listen(3000);
