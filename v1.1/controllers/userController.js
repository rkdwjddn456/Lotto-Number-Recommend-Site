const mysql = require('mysql');
const dbConfig = require('../config/database');

const db = mysql.createConnection(dbConfig);

// 로그인 처리
exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';

  db.query(sql, [username, password], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      req.session.loggedin = true;
      req.session.username = username;
      res.redirect('/lotto');
    } else {
      res.send('Incorrect username or password');
    }
  });
};

// 회원가입 처리
exports.register = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';

  db.query(sql, [username, password], (err, results) => {
    if (err) throw err;
    res.redirect('/login');
  });
};

// 로그아웃
exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};