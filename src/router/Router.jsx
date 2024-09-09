import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/Navbar/MyNavbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
