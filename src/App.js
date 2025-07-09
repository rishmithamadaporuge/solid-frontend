import React from "react";
import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/CompanyStats";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Clients from "./components/Clients";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyUs />
      <Clients />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
