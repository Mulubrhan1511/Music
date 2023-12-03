const express = require('express');
const router = express.Router();
const Song = require('../models/song');

// Create a song
router.post('/songs', async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create the song' });
  }
});

// List all songs
router.get('/songs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch songs' });
  }
});

// Update a song
router.put('/songs/:id', async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update the song' });
  }
});

// Remove a song
router.delete('/songs/:id', async (req, res) => {
  try {
    await Song.findByIdAndRemove(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: 'Failed to remove the song' });
  }
});

module.exports = router;