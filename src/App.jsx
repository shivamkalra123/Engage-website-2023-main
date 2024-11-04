import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Route and Routes
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sponsors from "./Components/Sponsors";
import Tracks from "./Components/Tracks";
import About from "./Components/About";
import "./App.css";
import FAQ from "./Components/FAQ";
import Home from "./Components/Home";
import StarfieldBackground from "./Components/StarfieldBackground"; // Ensure correct import
import AnotherPage from "./Components/Winners"; // Import your new page component

function App() {
  return (
    <div className="App">
      <StarfieldBackground />
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home */}
          <Route path="/another-page" element={<AnotherPage />} />{" "}
        </Routes>

        {/* <section id="about">
          <About />
        </section>
        <section id="Tracks">
          <Tracks />
        </section>
        <section id="Sponsors">
          <Sponsors />
        </section>
        <section id="FAQ">
          <FAQ />
        </section> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
