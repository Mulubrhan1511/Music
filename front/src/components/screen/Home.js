import React, { useEffect, useState } from "react";
import styled from '@emotion/styled';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  padding: 8px;
  background: rgb(9, 196, 243);
  text-align: left;
  font-weight: normal;
  font-size: 0.9rem;
  color: white;
`;

const StyledTd = styled.td`
  padding: 8px;
`;

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/songs")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((error) => {
        console.error("Failed to fetch songs:", error);
      });
  }, []);

  const deleteSong = (songId) => {
    fetch(`/songs/${songId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Failed to remove the song. Server returned status ${res.status}`);
        }
      })
      .then((result) => {
        console.log(result);
        // Remove the deleted song from the UI
        setData((prevData) => prevData.filter((song) => song._id !== songId));
        window.location.reload(); // Refresh the page
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  
  
  
  
  
  
  
  
  
  
  

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Title</StyledTh>
            <StyledTh>Artist</StyledTh>
            <StyledTh>Album</StyledTh>
            <StyledTh>Genre</StyledTh>
            <StyledTh>Edit</StyledTh>
            <StyledTh>DELETE</StyledTh>
          </tr>
        </thead>
        <tbody>
          {data.map((song) => (
            <tr key={song._id}>
              <StyledTd>{song.title}</StyledTd>
              <StyledTd>{song.artist}</StyledTd>
              <StyledTd>{song.album}</StyledTd>
              <StyledTd>{song.genre}</StyledTd>
              <StyledTd><a href={"/edit/" + song._id}>
                  <button className="button">Edit</button>
                </a></StyledTd>
              <StyledTd>
              <button
                  className="button delete"
                  onClick={() => deleteSong(song._id)}
                >
                  Delete
                </button>
              </StyledTd>
              
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
}

export default Home;
