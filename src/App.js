import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./component/Auth"
import StaysPage from "./pages/StayPage";
import FlightPage from "./pages/FlightPage";
import PackagesPage from "./pages/PackagesPage";


function App() {
  return (
    <>  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/login" element={<AuthPage />} /> 
        <Route path="/Stays" element={<StaysPage />} />
        <Route path="/Stays" element={<FlightPage />} />
        <Route path="/Stays" element={<PackagesPage />}/>
    </Routes>
    </>

  );
}

export default App;
