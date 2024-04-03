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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "rgba(167,167,167,255) ",
  fontFamily: "CircularSpotifyTxT-Black, sans-serif",
  borderBottom: "none",
}));

const fontStyle = {
  fontFamily: "CircularSpotifyTxT-Black, sans-serif",
};
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
          <TableRow sx={{ borderBottom: "1px solid rgb(140,140,140)" }}>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Album</StyledTableCell>
            <StyledTableCell>Release date</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(90,89,89,255)",
                  "& .action-icon": {
                    visibility: "visible",
                  },
                },
              }}
            >
              <StyledTableCell sx={{ width: "1%" }} component="th" scope="row">
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
                        ...fontStyle,
                      }}
                      variant="subtitle1"
                    >
                      {row.track}
                    </Typography>

                    <Typography
                      sx={{
                        ...fontStyle,
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

              <StyledTableCell
                sx={{
                  width: "13%",
                }}
              >
                {row.date}
                <Button
                  sx={{
                    color: "rgba(167,167,167,255)",
                    backgroundColor: "transparent",
                    "&:hover": { backgroundColor: "transparent" },
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
  );
}
