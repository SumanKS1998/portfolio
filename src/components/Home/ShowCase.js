import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Lottie from "lottie-react";
import Arrow from '../../../public/images/scroll.json'
const ShowCase = () => {
  return (
    <Stack mt={25} height="100vh">
      <Stack alignItems="center">
        <Typography className="title-top" variant="h6">
          Turn Your
        </Typography>
      </Stack>
      <Stack direction="row" gap={1} justifyContent="center">
        <Typography variant="h1" fontWeight={800} className="text-gradient-1 title-top">
          Ideas
        </Typography>
        <Lottie animationData={Arrow}/>
        <Typography variant="h1" fontWeight={800} className="text-gradient-2 title-top">
          Webapp
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ShowCase;
