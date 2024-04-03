import * as React from "react";
import {
  Box,
  styled,
  Autocomplete,
  TextField,
  AutocompleteRenderInputParams,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "../containers/auth/selectors";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";

interface OptionType {
  label: string;
  img: string;
  uri: string;
}

const fontStyle = {
  fontFamily: "CircularSpotifyTxT-Black, sans-serif",
};

const commonStyles = {
  borderRadius: "999px",
  padding: "0 20px",
  fontSize: "14px",
  letterSpacing: "2px",
  transition: "background-color 200ms ease-in-out",
};

const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiAutocomplete-inputRoot": {
    ...commonStyles,
    color: "white",
    backgroundColor: "transparent",
    fontSize: "18px",
    fontFamily: "CircularSpotifyTxT-Black, sans-serif",
    alignItems: "center",
    width: "310px",
    height: "54px",

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(54, 51, 51, 1)",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#1ED760",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#1DB954",
    },
  },
});

export default function SearchMusic({ playlistID, reset }: any) {
  const [autocompleteOptions, setAutocompleteOptions] = useState<OptionType[]>(
    []
  );
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const accessToken = useSelector(authSelectors.getAccessToken);

  useEffect(() => {
    if (inputValue && accessToken) {
      axios
        .get("https://api.spotify.com/v1/search", {
          headers: { Authorization: `Bearer ${accessToken}` },
          params: {
            q: inputValue,
            type: "track",
            limit: 50,
          },
        })
        .then((response) => {
          setAutocompleteOptions(
            response.data.tracks.items.map(
              (item: {
                name: string;
                album: { images: { url: string }[] };
                uri: string;
              }) => ({
                label: item.name,
                img: item.album ? item.album.images[0]?.url : "",
                uri: item.uri,
              })
            )
          );
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }, [accessToken, inputValue]);

  const addTrackToPlaylist = (uri: any) => {
    if (uri && accessToken && playlistID) {
      axios
        .post(
          `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
          {
            uris: [uri],
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((response) => {
          reset();
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      <StyledAutocomplete
        freeSolo
        value={value}
        onChange={(event: any, newValue: any | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={autocompleteOptions}
        renderOption={(props, option: any) => (
          <Box
            component="li"
            sx={{
              backgroundColor: "rgba(40,40,40,255) !important",
              color: "white",
              fontFamily: "CircularSpotifyTxT-Black, sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "green !important",
              },
            }}
            {...props}
          >
            <img
              alt="Track cover"
              src={option.img}
              style={{ width: "auto", height: "40px" }}
            />
            <span
              style={{
                flexGrow: 1,
              }}
            >
              {option.label}
            </span>

            <AddIcon
              fontSize="small"
              onClick={() => addTrackToPlaylist(option.uri)}
            />
          </Box>
        )}
        renderInput={(params: AutocompleteRenderInputParams) => (
          <TextField
            {...params}
            label="Search for a track"
            variant="outlined"
            InputLabelProps={{
              style: { color: "white", ...fontStyle },
            }}
          />
        )}
      />
    </Box>
  );
}
