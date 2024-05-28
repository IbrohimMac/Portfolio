import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
