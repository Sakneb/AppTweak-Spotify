import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "white",
  fontFamily: "CircularSpotifyTxT-Black, sans-serif",
  borderBottom: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
}));

function createData(
  id: number,
  track: string,
  artist: string,
  albumName: string,
  albumCover: string,
  date: number
) {
  return { id, track, artist, albumName, albumCover, date };
}

const rows = [
  createData(1, "track name", "artist", "album name", "./images/cover.jpg", 24),
  createData(2, "track name", "artist", "album name", "./images/cover.jpg", 24),
  createData(3, "track name", "artist", "album name", "./images/cover.jpg", 67),
  createData(4, "track name", "artist", "album name", "./images/cover.jpg", 49),
];

export default function TrackList() {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "rgba(40,40,40,255)" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Album</StyledTableCell>
            <StyledTableCell>Release date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell sx={{ width: "2%" }} component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell sx={{ width: "40%" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img
                    src={row.albumCover}
                    alt={row.track}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "CircularSpotifyTxT-Black, sans-serif",
                      }}
                      variant="subtitle1"
                    >
                      {row.track}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "CircularSpotifyTxT-Black, sans-serif",
                        color: "white",
                      }}
                      variant="body2"
                    >
                      {row.artist}
                    </Typography>
                  </Box>
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{ width: "30%" }}>
                {row.albumName}
              </StyledTableCell>
              <StyledTableCell sx={{ width: "15%" }}>
                {row.date}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
