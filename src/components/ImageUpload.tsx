import React, { useState, ChangeEvent } from "react";
import { CardMedia, Box, Typography } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const ImageUploader = ({
  imgUploadData,
}: {
  imgUploadData: string | undefined;
}) => {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null | undefined
  >(imgUploadData);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <label htmlFor="contained-button-file">
        <CardMedia
          component="img"
          image={selectedImage as string}
          alt="Selected Image"
          sx={{
            height: "200px",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            padding: "10px",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundColor: "rgba(0,0,0,0)",
            opacity: 0,
            transition: "background-color 0.3s, opacity 0.3s",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
              opacity: 1,
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: "CircularSpotifyTxT-Black, sans-serif",
              fontSize: "1rem",
              opacity: 0,
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            <PhotoCamera sx={{ mr: 1 }} />
            Choose photo
          </Typography>
        </Box>
      </label>
    </Box>
  );
};

export default ImageUploader;
