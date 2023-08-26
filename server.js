const express = require('express');
const app = express();
const PORT = 3000;

let counter = 0;

const usersList = [
  { name: 'Carlos', email: 'example@gmail.com' },
  { name: 'Rigo', email: 'rigonator@gmail.com' },
  { name: 'Egan', email: 'eganzipa@gmail.com' },
];

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = usersList[`${id}`];

  if (!user) return res.status(404).json({ message: 'User not Found' });

  res.json({ data: user });
});

app.get('/api/users', (req, res) => {
  if (usersList.length === 0)
    return res.status(404).json({ message: 'Not Users Found' });

  res.json({ data: { ...usersList } });
});

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
