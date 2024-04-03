import * as React from "react";
import Grid from "@mui/material/Grid";
import NavbarComponent from "../components/NavbarComponent";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MediaCardComponent from "../components/MediaCardComponent";
import TableComponent from "../components/TableComponent";
import { useState } from "react";
import "../App.css";
const drawerWidth = 350;
export default function SpacingGrid() {
  const [playlistDataList, setPlaylistDataList] = useState<any>([]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "rgba(40,40,40,255)",
          }}
        >
          <NavbarComponent />
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,

            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box
            sx={{
              overflow: "auto",

              background: `linear-gradient(
            0deg,
            rgba(26, 24, 24, 0.951) 5%,
            rgba(35, 128, 68, 0.978) 94%
          )`,

              height: "100vh",
            }}
          >
            <List>
              {playlistDataList.map((item: any, index: any) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ width: "20px" }}>
                      <img
                        width={"40px"}
                        src={item.images ? item.images[0].url : ""}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      secondary={item.owner.display_name}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <MediaCardComponent />
          <Box sx={{ mt: 3 }}>
            <TableComponent />
          </Box>
        </Box>
      </Box>
    </>
  );
}
