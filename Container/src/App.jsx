import React from "react";
import ReactDOM from "react-dom";
import Footer from "HomePage/Footer";
import Header from "HomePage/Header";
import Contact from "Contact/ContactUs";
import About from "About/About";
import "./index.css";
import "../../Css/cssG.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <Header
              CallBack={(value) => {
                const history = useNavigate();
                // history('/');
                console.log("value", history);
              }}
            />
            <Routes>
              <Route path="/" element={<>Home</>}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="/About" element={<About />}></Route>
            </Routes>
            <Footer />
          </div>
        }
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
