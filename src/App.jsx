import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";

import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";

import GRNPalmetto from "./components/GRNPalmetto";
import GRNAtlantaNorth from "./components/GRNAtlantaNorth";
import GRNDublin from "./components/GRNDublin";

// Supports weights 300-800
import "@fontsource-variable/open-sans";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-blue-950 text-white dark:text-blue-50">
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <div className="flex flex-col xl:flex-row gap-6">
                      <About />
                      <Projects />
                    </div>
                  </>
                }
              />
              <Route path="/project/grn-palmetto" element={<GRNPalmetto />} />
              <Route
                path="/project/grn-atlanta-north"
                element={<GRNAtlantaNorth />}
              />
              <Route path="/project/grn-dublin" element={<GRNDublin />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
