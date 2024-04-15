const express = require('express');
const multer = require('multer');
const imageController = require('./imageController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), imageController.uploadImage);

module.exports = router;
