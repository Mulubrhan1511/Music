const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Song = mongoose.model("Song")

// Create a song
router.post('/songs',(req, res) => {
    const {title,artist,album,genre} = req.body
 if(!title || !artist || !album || !genre){
    res.json({error:"please add all fields"})
 }
 const song = new Song({
    title : title ,
    artist : artist ,
    album : album ,
    genre : genre
 })
 song.save()
 .then(user=>{
    res.json({message:"Saved sucessfuly"})
 })
 .catch(err=>{
    console.log(err);
 })
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
router.put('/songs/', async (req, res) => {
    try {
      const { _id,title, artist, album, genre } = req.body;
      const song = await Song.findByIdAndUpdate(_id, { title, artist, album, genre }, { new: true });
      res.json(song);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update the song' });
    }
  });
  


  router.delete('/songs/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Song.findByIdAndRemove(id);
      res.json("Song removed successfully");
    } catch (error) {
      res.status(400).json({ error: 'Failed to remove the song' });
    }
  });
  
  

module.exports = router;