const express = require('express');
const path = require('path');
const lottoRoutes = require('./routes/lotto');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/lotto', lottoRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});