import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import axios from "axios";
import { authSelectors } from "../containers/auth/selectors";
import { useSelector } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "rgba(167,167,167,255) ",
  fontFamily: "CircularSpotifyTxT-Black, sans-serif",
  borderBottom: "none",
}));

const fontStyle = {
  fontFamily: "CircularSpotifyTxT-Black, sans-serif",
};

export default function TrackList({ trackList, playlistID, reset }: any) {
  const accessToken = useSelector(authSelectors.getAccessToken);

  let removeTrack = (trackURI: string) => {
    if (playlistID && trackURI) {
      axios
        .delete(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
          headers: { Authorization: `Bearer ${accessToken}` },
          data: {
            tracks: [{ uri: trackURI }],
          },
        })
        .then((response) => {
          reset();
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };
  return (
    <>
      {trackList.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: "rgba(40,40,40,255)" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ borderBottom: "1px solid rgb(140,140,140)" }}>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Album</StyledTableCell>
                <StyledTableCell>Release date</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {trackList.map((item: any, index: number) => (
                <TableRow
                  key={item.track.id}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(90,89,89,255)",
                      "& .action-icon": {
                        visibility: "visible",
                      },
                    },
                  }}
                >
                  <StyledTableCell
                    sx={{ width: "1%" }}
                    component="th"
                    scope="row"
                  >
                    {index + 1}
                  </StyledTableCell>

                  <StyledTableCell sx={{ width: "30%" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <img
                        src={item.track.album.images[0].url}
                        alt={item.track.name}
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Box>
                        <Typography
                          sx={{
                            ...fontStyle,
                          }}
                          variant="subtitle1"
                        >
                          {item.track.name}
                        </Typography>

                        <Typography
                          sx={{
                            ...fontStyle,
                            color: "white",
                          }}
                          variant="body2"
                        >
                          {item.track.artists[0].name}
                        </Typography>
                      </Box>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell sx={{ width: "30%" }}>
                    {item.track.album.name}
                  </StyledTableCell>

                  <StyledTableCell
                    sx={{
                      position: "relative",
                      width: "13%",
                    }}
                  >
                    {item.track.album.release_date}
                    <Button
                      sx={{
                        top: "25%",
                        position: "absolute",
                        color: "rgba(167,167,167,255)",
                        backgroundColor: "transparent",
                        "&:hover": { backgroundColor: "transparent" },
                      }}
                      onClick={() => {
                        removeTrack(item.track.uri);
                      }}
                    >
                      <DeleteOutlineOutlinedIcon
                        className="action-icon"
                        sx={{
                          visibility: "hidden",
                        }}
                      />
                    </Button>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>
          <h1 style={{ ...fontStyle, color: "white" }}>Empty Playlist</h1>
        </div>
      )}
    </>
  );
}
