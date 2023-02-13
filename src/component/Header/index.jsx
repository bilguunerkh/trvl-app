import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import { Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const Header = ({ clicked, index }) => {
  const cateItems = [
    { img: "./images/cate1.png", category: "Beaches" },
    { img: "./images/cate2.png", category: "Deserts" },
    { img: "./images/cate3.png", category: "Mountains" },
    { img: "./images/cate4.png", category: "Iconic Cities" },
    { img: "./images/cate5.png", category: "Iconic Cities" },
    { img: "./images/cate6.png", category: "Countryside" },
    { img: "./images/cate7.png", category: "Camping" },
    { img: "./images/cate8.png", category: "Castles" },
    { img: "./images/cate9.png", category: "Skiing" },
    { img: "./images/cate10.png", category: "Tropical" },
  ];

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "white",
  }));
  return (
    <Box
      sx={{
        backgroundImage: "url(./images/header.png)",
        backgroundSize: "cover",
        minHeight: { xs: "50vh", md: "40vh" },
        padding: "10%",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          component="h2"
          sx={{
            color: "#fff",
            fontSize: { xs: "32px", sm: "50px", md: "72px" },
            fontWeight: "700",
            width: "50%",
          }}
        >
          The whole world awaits.
        </Typography>
        <Grid
          container
          sx={{
            alignItems: "center",
            borderRadius: "1rem",
            backgroundColor: { md: "rgba(255, 255, 255, 0.4)", xs: "none" },
            padding: { xs: "8px 0", md: "8px 16px" },
            margin: "40px 0",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              minHeight: "36px",
              margin: { xs: "5px 0", md: "0" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.4)",
                md: "transparent",
              },
              borderRadius: { xs: "2rem", md: "none" },
            }}
          >
            <SearchIcon
              sx={{ color: "white", opacity: "0.7", alignSelf: "center" }}
            />
            <StyledInputBase
              sx={{
                background: "transparent",
                minWidth: "300px",
              }}
              type="search"
              placeholder="Search destinations, hotels"
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              minHeight: "36px",
              margin: { xs: "5px 0", md: "0" },
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.4)",
                md: "transparent",
              },
              borderRadius: { xs: "2rem", md: "none" },
            }}
          >
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayOutlinedIcon
                sx={{ color: "white", opacity: "0.7" }}
              />
              <Typography sx={{ color: "white", opacity: "0.7" }}>
                Check in
              </Typography>
            </Grid>
            <Box
              sx={{
                fontSize: "20px",
                fontWeight: "lighter",
                color: "white",
                opacity: "0.7",
                display: { xs: "block", md: "none" },
              }}
            >
              &#124;
            </Box>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <DateRangeIcon sx={{ color: "white", opacity: "0.7" }} />
              <Typography sx={{ color: "white", opacity: "0.7" }}>
                Check out
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              minHeight: "36px",
              margin: { xs: "5px 0", md: "0" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.4)",
                md: "transparent",
              },
              borderRadius: { xs: "2rem", md: "none" },
            }}
          >
            <PersonIcon sx={{ color: "white", opacity: "0.7" }} />
            <Typography
              sx={{ lineHeight: "1rem", color: "white", opacity: "0.7" }}
            >
              1 room, 2 adults
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{ minHeight: "36px", margin: { xs: "5px 0", md: "0" } }}
          >
            <Button
              variant="contained"
              sx={{
                "&:hover": { color: "white" },
                color: "white",
                backgroundColor: "#2146C7",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "2rem",
                width: "100%",
                boxShadow: "none",
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#fff",
            fontSize: { xs: "28px", md: "32px" },
            margin: "3% 0",
          }}
        >
          Top categories
        </Typography>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {cateItems.map((cate, i) => (
            <Box>
              <button
                style={{ background: "transparent", border: "none" }}
                onClick={() => clicked(i)}
              >
                <div>
                  <img src={cate.img} />
                </div>
                <p
                  style={{
                    color: "white",
                    opacity: i === index ? 1 : "0.5",
                    fontSize: "16px",
                    fontWeight: "400",
                    borderBottom: i === index ? "2px solid white" : "none",
                    paddingBottom: "10px",
                  }}
                >
                  {cate.category}
                </p>
              </button>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
