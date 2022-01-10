import "./App.css";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "./context";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "wheat",
      }}
    >
      <Navbar />
      <Toggle />

      <Intro />

      <About />

      <ProductList />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
