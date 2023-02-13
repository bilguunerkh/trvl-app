import React from "react";
import Header from "../../component/Header";
import TopVacation from "../../component/TopVacation";
import { Box } from "@mui/material";
import Offers from "../../component/Offers";
import Browse from "../../component/Browse";
import Plan from "../../component/Plan ";
import Connect from "../../component/Connect";
import Iphone from "../../component/Iphone";
import Navbar from "../../component/Navbar";

const HomePage = () => {
  return (
    <Box maxWidth={"1800px"}>
      <Navbar />
      <Header />
      <>
        <TopVacation />
        <Offers />
        <Browse />
        <Plan />
        <Connect />
        <Iphone />
      </>
    </Box>
  );
};

export default HomePage;
