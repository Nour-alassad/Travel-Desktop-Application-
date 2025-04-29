import React from "react";
import "./app.css";
import Footer from "../src/Components/Footer/Footer.jsx";
import Home from "../src/Components/Home/Home.jsx";
import Main from "../src/Components/Main/Main.jsx";
import Navbar from "../src/Components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  );
};

export default App;
