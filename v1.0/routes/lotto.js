const express = require('express');
const router = express.Router();
const lottoController = require('../controllers/lottoController');

router.get('/', lottoController.generateLottoNumbers);

module.exports = router;