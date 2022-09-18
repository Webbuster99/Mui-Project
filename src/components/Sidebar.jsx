import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

const Sidebar = ({setMode,mode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
        <List>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: "blue",
                color: "#fff",
                borderRadius: "10px",
              },
            }}
          >
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon sx={{ "&:hover": { color: "#fff" } }} />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: "blue",
                color: "#fff",
                borderRadius: "10px",
              },
            }}
          >
            <ListItemButton component="a" href="#article">
              <ListItemIcon>
                <ArticleIcon sx={{ "&:hover": { color: "#fff" } }} />
              </ListItemIcon>
              <ListItemText primary="Articles" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: "blue",
                color: "#fff",
                borderRadius: "10px",
              },
            }}
          >
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <GroupIcon sx={{ "&:hover": { color: "#fff" } }} />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: "blue",
                color: "#fff",
                borderRadius: "10px",
              },
            }}
          >
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
                <StorefrontIcon sx={{ "&:hover": { color: "#fff" } }} />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: "blue",
                color: "#fff",
                borderRadius: "10px",
              },
            }}
          >
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <PersonAddIcon sx={{ "&:hover": { color: "#fff" } }} />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: "blue",
                color: "#fff",
                borderRadius: "10px",
              },
            }}
          >
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <SettingsIcon sx={{ "&:hover": { color: "#fff" } }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              "&:hover": {
                backgroundColor: "blue",
                color: "#fff",
                borderRadius: "10px",
              },
            }}
          >
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountCircleIcon sx={{ "&:hover": { color: "#fff" } }} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Switch onChange={()=>{setMode(mode === "light" ? "dark" : "light")}}/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
