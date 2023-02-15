import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";

const mobileIcons = [
  { img: "./images/vector1.png", title: "Home" },
  { img: "./images/vector1.png", title: "Packages" },
  { img: "./images/vector1.png", title: "Stays" },
  { img: "./images/vector1.png", title: "Flights" },
];

const Footer = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Grid
        container
        sx={{
          background: "#141414",
          color: "white",
          padding: "25px 10%",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Grid
          item
          xs={3}
          sx={{ fontSize: "32px", color: "white", fontWeight: "bold" }}
        >
          ekocab.
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <Grid sx={{ fontSize: "13px" }}>
            <p>Seslendirme ve Alt Jazz</p>
            <p>Media Market</p>
            <p>Gillie</p>
            <p>Size Last</p>
          </Grid>

          <Grid sx={{ fontSize: "13px" }}>
            <p>Seslendirme ve Alt Jazz</p>
            <p>Media Market</p>
            <p>Gillie</p>
            <p>Size Last</p>
          </Grid>

          <Grid sx={{ fontSize: "13px" }}>
            <p>Seslendirme ve Alt Jazz</p>
            <p>Media Market</p>
            <p>Gillie</p>
            <p>Size Last</p>
          </Grid>

          <Grid sx={{ fontSize: "13px" }}>
            <p>Seslendirme ve Alt Jazz</p>
            <p>Media Market</p>
            <p>Gillie</p>
            <p>Size Last</p>
          </Grid>
        </Grid>
        <Grid xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid>
            <button
              style={{
                background: "none",
                color: "white",
                border: "1px solid white",
                padding: "10px 15px",
              }}
            >
              Helmet KOD
            </button>
            <p>© 1997-2021 Netflix, Inc.</p>
          </Grid>
          <Box sx={{ width: "200px", margin: "30px" }}>
            <img style={{ marginLeft: "16px" }} src="./images/facebook.png" />
            <img style={{ marginLeft: "16px" }} src="./images/twi.png" />
            <img style={{ marginLeft: "16px" }} src="./images/insta.png" />
            <img style={{ marginLeft: "16px" }} src="./images/youtubes.png" />
          </Box>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "space-between",
          position: "fixed",
          backgroundColor: "blue",
          width: "100%",
          padding: "0 10%",
          paddingTop: "5px",
        }}
      >
        {mobileIcons.map((icon, i) => (
          <Button
            sx={{
              textTransform: "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img src={icon.img} />
            <p style={{ margin: "0" }}>{icon.title}</p>
          </Button>
        ))}
      </Grid>
    </Box>
  );
};
export default Footer;
