const express = require('express');
const router = express.Router();
const multer = require('multer');
const excelController = require('../controllers/excelController');
const upload = multer({ dest: 'uploads/' });
router.post('/upload', upload.single('file'), excelController.analyzeExcel);
module.exports = router;
