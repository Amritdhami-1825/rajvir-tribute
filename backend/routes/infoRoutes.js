const express = require('express');
const router = express.Router();
const Info = require('../models/Info');

// GET all info
router.get('/', async (req, res) => {
  try {
    const infos = await Info.find();
    res.json(infos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET info by section (bio, songs, etc.)
router.get('/:section', async (req, res) => {
  try {
    const info = await Info.findOne({ section: req.params.section });
    if (info) res.json(info);
    else res.status(404).json({ message: 'Section not found' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
