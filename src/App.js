import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Newsletter from "./pages/Newsletter";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Newsletter />
    </>
  );
}

export default App;
