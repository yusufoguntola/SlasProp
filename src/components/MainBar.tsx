"use client";

import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import Link from "next/link";
import Logo from "../assets/Logo.png";

const MainBar = () => {
  const { push } = useRouter();

  function handleLogout() {
    localStorage.clear();
    push("/login");
  }

  return (
    <Box sx={{ flexGrow: 1, boxShadow: "0 4px 2px -2px gray" }}>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "white",
          color: "black",
          maxHeight: "80px",
          minHeight: "80px",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              sx={{
                maxHeight: 50,
              }}
              alt="Your logo."
              src={Logo.src}
            />
          </Typography>
          <InputBase
            sx={{
              fontSize: { lg: 12, sm: 12, xs: 7 },
              border: "1px solid grey;",
              py: 0.25,
            }}
            placeholder="  Search Here"
            inputProps={{ "aria-label": "search-bar" }}
          />
          <Button
            type="button"
            className="SearchButton"
            size="small"
            sx={{
              bgcolor: "#26a69a",
              color: "white",
              borderRadius: "0px",
              "&:hover": { backgroundColor: "#52d6cf" },
              marginRight: 3,
            }}
            aria-label="search"
          >
            <SearchIcon />
          </Button>

          <Divider sx={{ color: "#26a69a" }} orientation="vertical" flexItem />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={1} color="error">
                <ChatBubbleOutlineOutlinedIcon
                  fontSize="medium"
                  sx={{ color: "#26a69a" }}
                />
              </Badge>
            </IconButton>

            <Divider
              sx={{ color: "#26a69a" }}
              orientation="vertical"
              flexItem
            />

            <IconButton
              size="large"
              color="inherit"
              component={Link}
              href="/dashboard/notifications"
            >
              <Badge badgeContent={1} color="error">
                <NotificationsNoneOutlinedIcon
                  fontSize="large"
                  sx={{ color: "#26a69a" }}
                />
              </Badge>
            </IconButton>

            <Divider
              sx={{ color: "#26a69a" }}
              orientation="vertical"
              flexItem
            />

            <IconButton
              sx={{ fontSize: "18px", fontWeight: "bold", color: "black" }}
              onClick={handleLogout}
            >
              Log out
              <ArrowCircleRightOutlinedIcon
                fontSize="large"
                sx={{ ml: 1, color: "#26a69a" }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainBar;
