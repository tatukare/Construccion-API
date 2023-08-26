const express = require('express');
const app = express();
const PORT = 3000;

let counter = 0;

app.get('/api/users/:id', (req, res) => {});
app.get('/api/users', (req, res) => {});

app.use('/', (req, res) => {
  counter++;
  console.log('counter: ', counter);
  console.log('Hello World in terminal');
  res.status(404).send({ message: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Node server runing on port ${PORT}`);
  console.log('counter: ', counter);
});
