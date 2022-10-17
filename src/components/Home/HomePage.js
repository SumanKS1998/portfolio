import { Avatar, Button, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import MailIcon from "@mui/icons-material/Mail";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ArrowForward from "@mui/icons-material/ArrowForward";
const HomePage = () => {
  return (
    <Stack height="80vh" direction="row"  justifyContent="space-between" alignItems='center'>
      <Box sx={{ width: "50%" }}>
        <Typography
          variant="h2"
          className="title-top"
          color="text"
          fontWeight={800}
        >
          Let's create
        </Typography>
        <Typography
          variant="h2"
          className="title-top"
          color="text"
          fontWeight={800}
        >
          Something
        </Typography>
        <Typography
          variant="h2"
          className="title-top"
          color="tertiary.main"
          fontWeight={800}
        >
          Awesome
        </Typography>

        <Stack direction="row" gap={0.8} mt={4}>
          <Stack
            bgcolor="#007fffb8"
            alignItems="center"
            justifyContent="center"
            px={0.5}
            borderRadius={2}
          >
            <CodeIcon sx={{ fontSize: 20, color: "#fff" }} />
          </Stack>
          <Typography className="title-bottom">
            Hi! I am a{" "}
            <Typography
              component="span"
              color="tertiary.main"
              className="title-bottom"
            >
              Web Developer
            </Typography>
          </Typography>
        </Stack>
        <Stack mt={2} direction="row" gap={2}>
          <Button className="action-btn" endIcon={<MailIcon />}>
            Let's Talk
          </Button>
          <Button
            variant="outlined"
            sx={{ borderRadius: 3, textTransform: "inherit" }}
            endIcon={<ArrowForward />}
            color="tertiary"
          >
            My Work
          </Button>
        </Stack>
      </Box>
       
      <Stack
        alignItems="center"
        gap={2}
        position="relative"
        sx={{ width: "50%" }}
      >
        <Stack className="comment1" direction="row" gap={2}>
          <Avatar
            alt="Diganta Kalita IT team"
            sx={{ width: 60, height: 60, border: "1px solid #77bbff" }}
            src="/images/dk.png"
          />
          <Stack>
            <Typography className="title-bottom" sx={{ color: "#fff" }}>
              Diganta Kalita IT team
            </Typography>
            <Typography
              className="title-bottom"
              variant="caption"
              sx={{ color: "#f3f3f3" }}
            >
              @digantaKalita
            </Typography>
            <Divider />
            <Typography className="title-bottom" sx={{ color: "#f3f3f3" }} variant='body2' mt={1}>
              Great Work by Mr. Suman
            </Typography>
          </Stack>
        </Stack>
        <Stack className="comment2" direction="row" gap={2}>
          <Avatar
            alt="Diganta Kalita IT team"
            sx={{ width: 60, height: 60, border: "1px solid #77bbff" }}
            src="/images/dk.png"
          />
          <Stack>
            <Typography className="title-bottom" sx={{ color: "#fff" }}>
              Diganta Kalita IT team
            </Typography>
            <Typography
              className="title-bottom"
              variant="caption"
              sx={{ color: "#f3f3f3" }}
            >
              @digantaKalita
            </Typography>
            <Divider />
            <Typography className="title-bottom" sx={{ color: "#f3f3f3" }} variant='body2' mt={1}>
              Great Work by Mr. Suman
            </Typography>
          </Stack>
        </Stack>
        <Box
        my='auto'
          className="profile-gradient"
          sx={{
            borderRadius: "100vmax",
            overflow: "hidden",
            height: "350px",
            width: "350px",
          }}
        >
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
            src="/images/suman.png"
            // sx={{  }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default HomePage;
