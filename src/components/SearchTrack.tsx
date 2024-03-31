import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import AddPlaylist from "./AddPlaylist";
import Input from "@mui/joy/Input";

interface SearchTrack {
  onSearch: (query: string) => void;
}

const CommonButton = styled(Button)({
  color: "white",
  display: "inline-flex",
  textAlign: "center",
  alignItems: "center",
  borderRadius: "999px",
  padding: "0 60px",
  minHeight: "54px",
  minWidth: "160px",
  textTransform: "uppercase",
  cursor: "pointer",
  fontSize: "14px",
  letterSpacing: "2px",
  transition: "background-color 200ms ease-in-out",
  "&:hover": {
    backgroundColor: "#1ED760",
  },
  "&:active": {
    backgroundColor: "#1DB954",
  },
  "&:focus": {
    outline: "none",
  },
});

const SearchInput = styled(Input)({
  backgroundColor: "rgba(40,40,40,255)",
  color: "white",
  borderRadius: "999px",
  padding: "0 60px",
  fontSize: "18px",
  letterSpacing: "2px",
  transition: "background-color 200ms ease-in-out",
  border: "2px solid rgba(54, 51, 51, 1)",
});

const Search: React.FC<SearchTrack> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: "2px" }}>
        <SearchInput
          sx={{ fontFamily: "CircularSpotifyTxT-Black, sans-serif" }}
          variant="outlined"
          placeholder="Search for a track"
          value={searchInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(event.target.value)
          }
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <CommonButton
          sx={{
            backgroundColor: "#1DB954",
            fontFamily: "CircularSpotifyTxT-Black, sans-serif",
          }}
          onClick={handleSearch}
        >
          Search
        </CommonButton>
      </Box>
      <CommonButton sx={{ color: "black", backgroundColor: "#1DB954" }}>
        <AddPlaylist />
      </CommonButton>
    </Box>
  );
};

export default Search;
