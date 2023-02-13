import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const vacations = [
  { title: "Hotels", img: "./images/bro1.png" },
  { title: "Apartments", img: "./images/bro2.png" },
  { title: "Resorts", img: "./images/bro3.png" },
  { title: "Villas", img: "./images/bro4.png" },
  { title: "Hotels", img: "./images/bro1.png" },
  { title: "Apartments", img: "./images/bro2.png" },
  { title: "Resorts", img: "./images/bro3.png" },
  { title: "Resorts", img: "./images/bro4.png" },
];

const Browse = () => {
  return (
    <Box sx={{ marginLeft: "10%" }}>
      <Typography sx={{ color: "black", fontSize: "32px", fontWeight: "bold" }}>
        Top Vacations
      </Typography>
      <Box sx={{ display: "flex", gap: "20px", overflowX: "auto" }}>
        {vacations.map((vac) => (
          <Box sx={{ position: "relative" }}>
            <img
              style={{ width: "300px", borderRadius: "8px", height: "200px" }}
              src={vac.img}
              alt=""
            />
            <Typography
              sx={{
                position: "absolute",
                bottom: "7%",
                left: "5%",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {vac.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Browse;
