import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Photography from "../pages/Photography";
import NotFound from "../pages/NotFound";

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="photography" element={<Photography />} />
    </Routes>
  );
};

export default AnimatedRoutes;
