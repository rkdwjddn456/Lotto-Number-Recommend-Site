const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const lottoController = require('../controllers/lottoController');

// 로그인 페이지
router.get('/login', (req, res) => {
  res.render('login');
});

// 로그인 처리
router.post('/login', userController.login);

// 회원가입 페이지
router.get('/register', (req, res) => {
  res.render('register');
});

// 회원가입 처리
router.post('/register', userController.register);

// 로그인한 사용자에게 로또 번호 추천
router.get('/lotto', lottoController.recommendLottoNumbers);

// 로그아웃
router.get('/logout', userController.logout);

module.exports = router;