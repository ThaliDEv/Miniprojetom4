const express = require('express');
const app = express();

const router = require('./router/router');
const { initDatabase } = require('./database/database');

app.use(express.json());
app.use('/', router);

initDatabase().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
});
