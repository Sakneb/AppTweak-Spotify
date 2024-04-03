import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const fontStyle = {
  fontFamily: "CircularSpotifyTxT-Black, sans-serif",
};

interface MediaItem {
  name: string;
  description?: string;
  images?: { url: string }[];
  owner?: {
    display_name: string;
  };
}

export default function MediaCardComponent({ item }: { item: MediaItem }) {
  return (
    <Card
      sx={{ display: "flex", background: "transparent", boxShadow: "none" }}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={item.images ? item.images[0].url : "/images/avatar.jpg"}
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "trasparent",
        }}
      >
        <CardContent
          sx={{
            flex: "1 0 auto",
            color: "white",
          }}
        >
          <Typography component="div" variant="h5" sx={{ ...fontStyle }}>
            {item.name}
          </Typography>
          <Typography
            sx={{ background: "transparent", ...fontStyle }}
            variant="subtitle1"
            color="white"
            component="div"
          >
            {item.owner ? item.owner.display_name : ""}
          </Typography>
          <Typography
            sx={{ background: "transparent", ...fontStyle }}
            variant="subtitle1"
            color="white"
            component="div"
          >
            {item.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
