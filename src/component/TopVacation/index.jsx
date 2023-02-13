import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const vacations = [
  { title: "Bali, Indonesia", img: "./images/topvac1.png" },
  { title: "Kerry, Ireland", img: "./images/topvac2.png" },
  { title: "Sydney, Australia", img: "./images/topvac3.png" },
  { title: "Paris, France", img: "./images/topvac4.png" },
  { title: "Bali, Indonesia", img: "./images/topvac1.png" },
  { title: "Kerry, Ireland", img: "./images/topvac2.png" },
  { title: "Sydney, Australia", img: "./images/topvac3.png" },
  { title: "Paris, France", img: "./images/topvac4.png" },
  { title: "Paris, France", img: "./images/topvac4.png" },
  { title: "Bali, Indonesia", img: "./images/topvac1.png" },
  { title: "Kerry, Ireland", img: "./images/topvac2.png" },
  { title: "Sydney, Australia", img: "./images/topvac3.png" },
  { title: "Paris, France", img: "./images/topvac4.png" },
  { title: "Paris, France", img: "./images/topvac4.png" },
];

const TopVacation = () => {
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

export default TopVacation;
