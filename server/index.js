const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const router = require('./router');

dotenv.config();

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../client/dist/') });
});

// app.get('/', (req, res) => {
//   res.send('Response');
// });

app.listen(port, () => {
  console.log('Server listening on port:', port);
});
