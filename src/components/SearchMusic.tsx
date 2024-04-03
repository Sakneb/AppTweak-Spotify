import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "../containers/auth/selectors";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";

export default function SearchMusic() {
  const [options, setOption] = React.useState([{ label: "" }] as any);
  const [value, setValue] = React.useState(options[0]);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [displayPlaylist, setDisplayPlaylist] = React.useState([]);
  const accessToken = useSelector(authSelectors.getAccessToken);

  useEffect(() => {
    const request = () => {
      if (accessToken && inputValue) {
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
            console.log(response.data);
            setOption(
              response.data.tracks.items.map((item: any) => ({
                label: item.name,
                img: item.album.images[0].url,
              }))
            );
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      }
    };

    request();
  }, [accessToken, inputValue]);

  return (
    <div>
      <Autocomplete
        freeSolo
        value={value}
        onChange={(event: any, newValue: any | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        getOptionLabel={(option: any) => option.label}
        sx={{
          width: 350,
          display: "block",
        }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{
              backgroundColor: "rgba(40,40,40,255)",
              color: "white",
              fontFamily: "CircularSpotifyTxT-Black, sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "green",
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
            <AddIcon fontSize="small" />
          </Box>
        )}
      />
    </div>
  );
}
