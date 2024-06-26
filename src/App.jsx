import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

function App() {
  return (
    <BrowserRouter>

      <div className="relative z-0 bg-primary overflow-x-hidden">

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
      <StarsCanvas />

          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
