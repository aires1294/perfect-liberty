const express = require('express');
const Clothing = require('../models/Clothing');

const router = express.Router();

router.get('/', async (req, res) => {
  const roupas = await Clothing.find();
  res.json(roupas);
});

router.post('/', async (req, res) => {
  const novaRoupa = new Clothing(req.body);
  await novaRoupa.save();
  res.status(201).json(novaRoupa);
});

module.exports = router;
