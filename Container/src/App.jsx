import React from "react";
import ReactDOM from "react-dom";
// import Footer from "HomePage/Footer";
// import Header from "HomePage/Header";
// import Contact from "Contact/ContactUs";
// import About from "About/About";
import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from "react-router-dom";
import "../../Css/cssG.css";
import "./index.css";
import LayoutMain from "./layOutMain";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/*"
        element={<LayoutMain />}
      ></Route>
      <Route
        path="/login"
        element={
          <div className="container">
            <p>Login</p>
            <Link to={"/"}>Quay lại</Link>
          </div>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
