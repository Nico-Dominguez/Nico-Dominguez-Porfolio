import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";

import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import GRNPalmetto from "./components/GRNPalmetto";
import GRNAtlantaNorth from "./components/GRNAtlantaNorth";
import GRNDublin from "./components/GRNDublin";

// Supports weights 300-800
import "@fontsource-variable/open-sans";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen text-white font-light bg-gradient-to-bl from-white to-blue-200 dark:bg-gradient-to-bl dark:from-blue-500 dark:to-blue-950">
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <div className="flex flex-col xl:flex-row gap-4">
                      <About />
                      <Projects />
                    </div>
                    <Contact />
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
            <p className="text-sm font-mono text-center text-blue-700 dark:text-blue-200">
              made with ❤️ by:{" "}
              <span className="text-blue-700 dark:text-blue-300">Nico</span>
            </p>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
