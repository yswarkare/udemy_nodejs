const express = require('express');

const router = express.Router();

const path = require('path');
const rootDir = require('../utils/path');

router.get('/get-all', (req, res, next) => {
	res.status(200).sendFile(path.join(rootDir, 'views', 'users.html'));
});

module.exports = router;
