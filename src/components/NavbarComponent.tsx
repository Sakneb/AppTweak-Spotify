import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AddPlaylist from "./AddPlaylist";
import SearchMusic from "./SearchMusic";

export default function NavbarComponent({
  playlistID,
  reset,
  resetPlaylist,
}: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar sx={{ padding: "10px" }}>
        <SearchMusic playlistID={playlistID} reset={reset} />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <AddPlaylist />
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <AddPlaylist resetPlaylist={resetPlaylist} />
        </Box>
      </Toolbar>
    </Box>
  );
}
