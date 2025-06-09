const express = require('express');
const router = express.Router();
const visaController = require('../controllers/visaController');
const visaUpload = require('../middleware/multerConfig');

router.post('/visa-applications', visaUpload, visaController.createVisaApplication);

module.exports = router;
