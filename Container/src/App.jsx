import React from "react";
import ReactDOM from "react-dom";
import Footer from "HomePage/Footer";
import Header from "HomePage/Header";
import Contact from "Contact/ContactUs";
import About from "About/About";
import "./index.css";
import "../../Css/cssG.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => (
  <div className="container">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
