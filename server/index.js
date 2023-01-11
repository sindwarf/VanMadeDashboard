const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');

dotenv.config();

const app = express();
app.use(morgan('tiny'));
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/homeData', (req, res) => {
  console.log('here');
  res.status(201).send('Response from server');
});

// app.use('/api', routes);

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../client/dist/') });
});

// app.get('/', (req, res) => {
//   res.send('Response');
// });

app.listen(port, () => {
  console.log('Server listening on port:', port);
});
