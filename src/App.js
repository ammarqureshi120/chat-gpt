import React from "react";
import {
  Features,
  Header,
  Blog,
  Possibility,
  WhatGPT3,
  Footer,
} from "./containers";

import { Navbar, CTA, Brand } from "./components";

import "./app.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
