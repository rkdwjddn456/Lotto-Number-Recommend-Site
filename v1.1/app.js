const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;

// MySQL 연결 설정
const mysql = require('mysql');
const dbConfig = require('./config/database');
const db = mysql.createConnection(dbConfig);

// MySQL 연결
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// 라우터 연결
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});