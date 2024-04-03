import React, { useState, useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MediaCardComponent from "../components/MediaCardComponent";
import { useSelector } from "react-redux";
import { authSelectors } from "../containers/auth/selectors";
import TrackList from "../components/TrackList";
import axios from "axios";

const drawerWidth = 350;

const Home: React.FC = () => {
  const user = useSelector(authSelectors.getUser);
  const accessToken = useSelector(authSelectors.getAccessToken);
  const [trackList, setTrackList] = useState<any[]>([]);
  const [playlistID, setPlaylistID] = useState<string>("");
  const [playlist, setPlaylist] = useState<any[]>([]);
  const [trackDataItem, setTrackDataItem] = useState<any[]>([]);

  const showPlaylist = () => {
    axios
      .get(`https://api.spotify.com/v1/me/playlists`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        const { data } = response;
        setPlaylist(data.items);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const showTracksList = (item: any) => {
    if (item) {
      setPlaylistID(item.id);
      setTrackDataItem(item);
      axios
        .get(`https://api.spotify.com/v1/playlists/${item.id}/tracks`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => {
          const { data } = response;
          setTrackList(data.items);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };

  const resetPlaylist = () => {
    showPlaylist();
  };

  useEffect(() => {
    if (user) {
      showPlaylist();
    }
  }, [user, accessToken, playlist]);

  return (
    <>
      <Box sx={{ display: "flex", padding: "10px" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "rgba(40,40,40,255)",
          }}
        >
          <NavbarComponent
            playlistID={playlistID}
            reset={showTracksList}
            resetPlaylist={resetPlaylist}
          />
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,

            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              border: "none",
            },
          }}
        >
          <Toolbar />
          <Box
            className="web-scrollbar"
            sx={{
              overflow: "auto",

              background: `linear-gradient(
            0deg,
            rgba(26, 24, 24, 0.951) 5%,
            rgba(35, 128, 68, 0.978) 94%
          )`,

              height: "100vh",
            }}
          >
            <List>
              {playlist.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ width: "20px" }}>
                      <img
                        width={"40px"}
                        src={item.images ? item.images[0].url : ""}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      secondary={item.owner.display_name}
                      onClick={() => showTracksList(item)}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, background: "transparent" }}
        >
          <Toolbar />
          <MediaCardComponent item={trackDataItem} />
          <Box sx={{ mt: 3 }}>
            <TrackList trackList={trackList} playlistID={playlistID} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
