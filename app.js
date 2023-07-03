const express = require('express');
const app = express();
const path = require('path');
const lottoRoutes = require('./routes/lotto');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/lotto', lottoRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});