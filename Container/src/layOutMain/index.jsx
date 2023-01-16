import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "HomePage/Footer";
import Header from "HomePage/Header";
import Contact from "Contact/ContactUs";
import About from "About/About";
const Test = React.lazy(() => import('Test/Test'));
function LayoutMain(props) {
  const history = useNavigate();
  return (
    <div className="container">
      <Header
        CallBack={(value) => {
          history(value);
          console.log("value", history);
        }}
      />
      <Routes>
        <Route path="/" element={<><iframe src="https://micro-frontends.org/" width="100%" height="800"></iframe></>}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Test" element={<Test />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default LayoutMain;
