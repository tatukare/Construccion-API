const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const users = require('./routes/users');

const PORT = 3000;
// http://localhost:3000/api/users
let counter = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', users);

app.use('/', (req, res) => {
  counter++;
  console.log('counter: ', counter);
  console.log('Hello World in terminal');
  res.status(404).json({ message: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Node server runing on port ${PORT}`);
  console.log('counter: ', counter);
});
