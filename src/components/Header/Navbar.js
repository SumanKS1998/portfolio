import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
const Navbar = () => {
  const [homeFocus, setHomeFocus] = useState(false);
  const [workFocus, setWorkFocus] = useState(false);
  const [aboutFocus, setAboutFocus] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      setHomeFocus(true);
    }
    if (router.pathname === "/about") {
      setAboutFocus(true);
    }
    if (router.pathname === "/work") {
      setWorkFocus(true);
    }
  }, [router]);
  return (
    <AppBar
      sx={{ px: 10, py: 1, boxShadow: "none !important", bgcolor: "#fff" }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          sx={{ width: "33%" }}
          color="tertiary.main"
          variant="h3"
          fontWeight="bolder"
        >
          S
        </Typography>
        <List sx={{ width: "33%" }} component={Stack} direction="row" gap={2}>
          <ListItemButton
            className={homeFocus && 'focus'}
            sx={{
              borderRadius: 2,
              color: "primary.main",
              "&:hover": {
                color: "tertiary.main",
              },
            }}
          >
            <Typography
              sx={{ textAlign: "center", width: "100%" }}
              variant="body1"
            >
              Home
            </Typography>
          </ListItemButton>
          <ListItemButton
            sx={{
              borderRadius: 2,
              color: "primary.main",
              "&:hover": {
                color: "tertiary.main",
              },
            }}
          >
            <Typography
              sx={{ textAlign: "center", width: "100%" }}
              variant="body1"
            >
              Work
            </Typography>
          </ListItemButton>
          <ListItemButton
            sx={{
              borderRadius: 2,
              color: "primary.main",
              "&:hover": {
                color: "tertiary.main",
              },
            }}
          >
            <Typography
              sx={{ textAlign: "center", width: "100%" }}
              variant="body1"
            >
              About
            </Typography>
          </ListItemButton>
        </List>
        <Box textAlign="right" sx={{ width: "33%" }}>
          <Button
            variant="outlined"
            color="tertiary"
            endIcon={<ArrowForwardIcon />}
            className="btn"
          >
            Connect
          </Button>
        </Box>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
