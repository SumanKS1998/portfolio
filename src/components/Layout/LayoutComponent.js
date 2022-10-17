import { Box } from "@mui/system";
import React from "react";
import Navbar from "../Header/Navbar";

const LayoutComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box pt={8} px={10}>{children}</Box>
    </>
  );
};
export default LayoutComponent;
