const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/', (req, res) => {
//   res.send('Response');
// });

app.listen(port);
