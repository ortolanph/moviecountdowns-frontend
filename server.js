const express = require('express');

const app = express();

app.use(express.static('./dist/portal'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/portal/'}),
);

app.listen(process.env.PORT || 8080);
