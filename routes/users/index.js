const express = require('express');
const router = express.Router();

const usersList = [
  { name: 'Carlos', email: 'example@gmail.com' },
  { name: 'Rigo', email: 'rigonator@gmail.com' },
  { name: 'Egan', email: 'eganzipa@gmail.com' },
];

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = usersList[`${id}`];

  if (!user) return res.status(404).json({ message: 'User not Found' });

  res.json({ data: user });
});

router.get('/', (req, res) => {
  if (usersList.length === 0)
    return res.status(404).json({ message: 'Not Users Found' });

  res.json({ data: { ...usersList } });
});

router.post('/', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email)
    return res.status(400).json({ message: 'User and email are required' });

  const user = usersList.filter((u) => u.email === email);
  console.log(user);
  if (user.length > 0)
    return res.status(409).json({ message: 'User already exists' });

  usersList.push({ name, email });
  res.status(201).json({ name, email });
});

module.exports = router;
