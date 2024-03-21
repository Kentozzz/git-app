const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'トップページ' });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:3000`);
});
