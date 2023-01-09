import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";

import "./index.css";
import "../../Css/cssG.css";

const App = () => (
  <div className="container">
    {/* <Header /> */}
    <div>Home</div>
    {/* <Footer /> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
