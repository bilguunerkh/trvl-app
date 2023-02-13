import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
const Iphone = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(./images/coverApple.png)",
        backgroundSize: "cover",
        height: "550px",
        display: { xs: "none", sm: "flex" },
      }}
    >
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
            marginLeft: "9%",
            marginTop: "82px",
          },
        }}
      >
        <img style={{ position: "absolute" }} src="./images/13pro.png" />
      </Box>
    </Box>
  );
};

export default Iphone;
