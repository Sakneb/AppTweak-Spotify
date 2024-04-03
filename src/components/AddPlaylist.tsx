import * as React from "react";
import Button from "@mui/material/Button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PlaylistModal from "./PlaylistModal";
import { Box } from "@mui/material";

const AddPlaylist: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleSave = () => {
    setOpen(false);
  };

  const buttonStyle = {
    color: "white",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#1DB954",
    borderRadius: "999px",
    padding: "0 20px",
    minHeight: "54px",
    minWidth: "160px",
    textTransform: "uppercase",
    cursor: "pointer",
    fontSize: "13px",
    letterSpacing: "2px",
    transition: "background-color 200ms ease-in-out",
    fontFamily: "CircularSpotifyTxT-Black, sans-serif",

    "&:hover": {
      backgroundColor: "#1ED760",
    },

    "&:active": {
      backgroundColor: "#1DB954",
    },

    "&:focus": {
      outline: "none",
    },
  };

  return (
    <>
      <Button sx={{ ...buttonStyle }} onClick={handleAddClick}>
        <AddRoundedIcon
          sx={{
            position: "relative",
            fontSize: "20px",
            padding: "5px",
          }}
        />
        Add new playlist
      </Button>

      <PlaylistModal
        open={open}
        onClose={handleClose}
        onSave={handleSave}
        name={""}
        img={"/images/avatar.jpg"}
        description={""}
        headerName={"Add details"}
      />
    </>
  );
};

export default AddPlaylist;
