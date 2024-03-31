import React, { FC, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "./containers/auth/selectors";
import SearchTrack from "./components/SearchTrack";
import Playlist from "./components/Playlist";
import { Box, Container } from "@mui/material";
import TrackList from "./components/TrackList";
import "./App.css";

const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  const [isTrackListOpen, setIsTrackListOpen] = useState(false);


  const samplePlaylist = {
    name: "My playlist",
    image: "/images/cover.jpg",
    user: "Aurora Nova",
  };

  const toggleTrackList = () => {
    setIsTrackListOpen((prev) => !prev);
  };


  return (
    <div className="App">
      <Container sx={{ padding: "10px" }}>
        <Box sx={{ marginBottom: "40px" }}>
          <SearchTrack
            onSearch={function (query: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Box>
        <Box
          sx={{
            padding: "20px",
            fontFamily: "CircularSpotifyTxT-Black, sans-serif",
          }}
        >
          <Playlist
            playlist={samplePlaylist}
            onPlaylistClick={toggleTrackList}
          />
          {isTrackListOpen && <TrackList />}
        </Box>
      </Container>
    </div>
  );
};

export default App;
