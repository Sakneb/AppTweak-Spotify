import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlaylistModal from "./PlaylistModal";

interface PlaylistProps {
  playlist: {
    name: string;
    description?: string;
    image: string;
    user: string;
  };
  onPlaylistClick: () => void;
}

const Playlist: React.FC<PlaylistProps> = ({ playlist, onPlaylistClick }) => {
  const [open, setOpen] = useState(false);

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          backgroundColor: "#F0F0F0",
          transition: "background-color 200ms ease-in-out",
          width: "224px",
          height: "224px",
          margin: "8px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
        onClick={onPlaylistClick}
      >
        <CardMedia
          component="img"
          height="140"
          image={playlist.image}
          alt={playlist.name}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            backgroundColor: "rgba(40,40,40,255)",
            color: "white",
            fontFamily: "CircularSpotifyTxT-Black, sans-serif",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "CircularSpotifyTxT-Black, sans-serif" }}
          >
            {playlist.name}
          </Typography>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              fontFamily: "CircularSpotifyTxT-Black, sans-serif",
              color: "#6a6a6a",
            }}
          >
            {playlist.user}
          </Typography>
        </CardContent>
        <IconButton
          aria-label="settings"
          onClick={handleEditClick}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <MoreVertIcon />
        </IconButton>
      </Card>
      <PlaylistModal
        open={open}
        onClose={handleClose}
        onSave={handleSave}
        name={playlist.name}
        description={playlist.description}
        img={""}
        headerName={"Edit details"}
      />
    </>
  );
};

export default Playlist;
