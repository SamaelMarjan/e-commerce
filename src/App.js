import React from "react";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
