import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
function AddSong() {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const navigate = useNavigate();
    function addSong() {
        fetch("/songs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, artist, album, genre }),
        })
        .then((res) => res.json())
        .then(() => {
          // Redirect to "/"
         
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
  return (
    <div>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />

          <label htmlFor="artist">Artist</label>
          <input type="text" id="artist" name="artist" placeholder="Enter artist" value={artist} onChange={(e) => setArtist(e.target.value)} />

          <label htmlFor="album">Album</label>
          <input type="text" id="album" name="album" placeholder="Enter album" value={album} onChange={(e) => setAlbum(e.target.value)} />

          <label htmlFor="genre">Genre</label>
          <input type="text" id="genre" name="genre" placeholder="Enter genre" value={genre} onChange={(e) => setGenre(e.target.value)} />

          <br />
          <br />
          <button className="button" onClick={addSong}>Add Song</button>
        </div>
    </div>
  )
}

export default AddSong