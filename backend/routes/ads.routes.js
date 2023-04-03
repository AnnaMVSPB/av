const router = require('express').Router();
const { Ad } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const ads = await Ad.findAll({ raw: true });
    res.status(200).json(ads);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Ad.findOne({ where: { id } });
    res.json(animal);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      title, img, description, price,
    } = req.body;
    if (title && img && description && price) {
      const animal = await Ad.create({
        title,
        img,
        description,
        price,
        userId: 1,
      });
      res.status(201).json(animal);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Ad.destroy({ where: { id } });
    if (result) {
      res.status(200).json(id);
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title, img, description, price,
    } = req.body;
    if (title && img && description && price) {
      const animal = await Ad.findOne({ where: { id, userId: req.session.userid } });
      animal.title = title;
      animal.img = img;
      animal.description = description;
      animal.price = price;
      animal.save();
      res.json(animal);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
