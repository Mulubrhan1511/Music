import React ,{useState, useEffect} from 'react';

import styled from '@emotion/styled';

const NewTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const NewTh = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const NewTd = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;





const Album = () => {
    const [playlists, setPlaylists] = useState([])
  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await fetch('/stats'); // Replace with your backend API endpoint
      const data = await response.json();
      setPlaylists(data);
      console.log(data)
    } catch (error) {
      console.error(error);
      // Handle error state
    }
  };
  return (
    <NewTable>
      <thead>
        <tr>
          <NewTh>Album</NewTh>
          <NewTh>Artist</NewTh>
          <NewTh>No Song</NewTh>
          
        </tr>
      </thead>
      <tbody>
        
      {playlists && playlists.songsByArtist? (
  playlists.songsByAlbum.map((song) => (
    <tr key={song._id}>
      <NewTd>{song._id}</NewTd>
      <NewTd>{song.artist}</NewTd>
      <NewTd>{song.count}</NewTd>
    </tr>
  ))
) : (
  <tr>
    <td colSpan={2}>Loading...</td>
  </tr>
)}


       
       
        
      </tbody>
    </NewTable>
  );
};

export default Album;
