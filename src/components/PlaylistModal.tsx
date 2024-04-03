import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  DialogTitle,
} from "@mui/material";
import ImageUploader from "./ImageUpload";
import { Box } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";

interface PlaylistModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (newName: string, newDescription: string) => void;
  name: string;
  description?: string;
  img?: string;
  headerName: string;
}
const buttonStyle = {
  backgroundColor: "#fff",
  bottom: "10px",
  color: "black",
  borderRadius: "20px",
  textTransform: "none",
  fontWeight: "bold",
  padding: "8px 18px",
  fontSize: "0.875rem",
  minWidth: "74px",
  height: "40px",
  transition: "transform 0.1s",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "#fff",
  },

  fontFamily: "CircularSpotifyTxT-Black, sans-serif",
};

const fontStyle = {
  fontFamily: "CircularSpotifyTxT-Black, sans-serif",
};

const PlaylistModal: React.FC<PlaylistModalProps> = ({
  open,
  onClose,
  onSave,
  name,
  headerName,
  img,
  description,
}) => {
  const [newName, setNewName] = React.useState(name);
  const [newDescription, setNewDescription] = React.useState(description || "");
  const dispatch = useDispatch();
  const handleSave = () => {
    onSave(newName, newDescription);
    console.log(newName, newDescription);
   
  };

  return (
    <Box
      sx={{
        borderRadius: "16px",
        padding: "20px",
      }}
    >
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          style: {
            backgroundColor: "rgba(18,18,18,255)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "30px;",
            paddingBottom: "0",
          }}
        >
          <DialogTitle
            sx={{
              color: "#fff",
              ...fontStyle,
              padding: "0",
              display: "flex",
              alignItems: "center",
            }}
          >
            {headerName}
          </DialogTitle>
          <CloseIcon
            onClick={onClose}
            sx={{
              padding: "15px",
              cursor: "pointer",
              color: "white",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "24px",
            top: 0,
            paddingTop: "0",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ImageUploader imgUploadData={img} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="filled"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    color: "white",
                    ...fontStyle,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "white",
                    ...fontStyle,
                  },
                }}
                sx={{
                  backgroundColor: "rgba(62,60,61,255)",
                  borderRadius: 1,
                  marginBottom: 2,
                  color: "#fff",
                }}
              />

              <TextField
                id="description"
                label="Description"
                type="text"
                fullWidth
                variant="filled"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    color: "white",
                    ...fontStyle,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "white",
                    ...fontStyle,
                  },
                }}
                sx={{
                  backgroundColor: "rgba(62,60,61,1)",
                  borderRadius: 1,
                  padding: "8px 0",
                }}
                multiline
                rows={4}
              />
            </DialogContent>
          </Box>
        </Box>
        <DialogActions sx={{ paddingRight: "40px", paddingLeft: "20px" }}>
          <Button
            sx={{ ...buttonStyle }}
            onClick={handleSave}
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PlaylistModal;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
