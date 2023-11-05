const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));



console.log({ PORT });

app.listen(PORT || 6000);
