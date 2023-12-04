import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Edit() {
  const [song, setSong] = useState({});
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const { songid } = useParams();

  useEffect(() => {
    fetch(`/song/${songid}`)
      .then(res => res.json())
      .then(result => {
        setSong(result.song);
        setTitle(result.song.title || "");
        setArtist(result.song.artist || "");
        setAlbum(result.song.album || "");
        setGenre(result.song.genre || "");
      })
      .catch(error => {
        console.error("Failed to fetch song:", error);
      });
  }, [songid]);

  function editSong() {
    fetch("/songs", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: songid,
        title,
        artist,
        album,
        genre
      }),
    })
    .then((res) => res.json())
    .then(() => {
      // Redirect to "/url"
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }

  return (
    <div>
      {song ? (
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
          <button className="button" onClick={editSong}>Save Changes</button>
        </div>
      ) : null}
    </div>
  );
}

export default Edit;
