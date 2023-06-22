import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavCom from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App ">
      <NavCom />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
