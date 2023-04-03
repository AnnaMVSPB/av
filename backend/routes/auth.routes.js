const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/sign-in', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      let user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        user = {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
        };
        req.session.userid = user.id;
        res.status(201).json(user);
      } else {
        res.status(403).json({ message: 'Неверный email или пароль' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/sign-up', async (req, res) => {
  try {
    const {
      email, name, password, password2,
    } = req.body;
    if (password !== password2) {
      return res.json({ message: 'Пароли не совпадают' });
    }
    if (email && name && password && password2) {
      let user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          name,
          email,
          password: hash,
        });
        user = {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        };
        req.session.userid = user.id;
        res.status(201).json(user);
      } else {
        res.status(403).json({ message: 'Такой email уже существует' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.json(message);
  }
});
router.get('/verification', async (req, res) => {
  const userId = req.session.userid;
  if (userId) {
    const user = await User.findOne({ where: { id: userId }, attributes: { exclude: ['password'] } });
    res.status(200).json(user);
  } else {
    res.status(403).json({ message: 'no session' });
  }
});
router.get('/logout', async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res
      .clearCookie('user_sid')
      .status(200)
      .json({ message: 'Успешный выход' });
  });
});

module.exports = router;
