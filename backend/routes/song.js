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

router.get('/song/:songid', async (req, res) => {
    try {
      const song = await Song.findOne({ _id: req.params.songid });
      res.json({ song });
    } catch (err) {
      return res.status(404).json({ error: "Song not found" });
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
router.put('/songs', async (req, res) => {
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
      const result = await Song.findOneAndDelete({ _id: id });
      if (result) {
        console.log("Song removed");
        res.json("Song removed successfully");
      } else {
        throw new Error("Failed to remove the song");
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Failed to remove the song' });
    }
  });
  
  
  
// Get overall statistics
router.get('/stats', async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const songsByGenre = await Song.aggregate([
      { $group: { _id: '$genre', count: { $sum: 1 } } }
    ]);
    const songsByArtist = await Song.aggregate([
      { $group: { _id: '$artist', count: { $sum: 1 }, albums: { $addToSet: '$album' } } }
    ]);
    const songsByAlbum = await Song.aggregate([
      { $group: { _id: '$album', count: { $sum: 1 }, artist: { $first: '$artist' } } }
    ]);
    const totalArtists = songsByArtist.length;
    const totalAlbums = songsByAlbum.length;
    const totalGenres = songsByGenre.length;
    res.json({
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      songsByGenre,
      songsByArtist,
      songsByAlbum
      // Add more statistics here as needed
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});


module.exports = router;