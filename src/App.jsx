import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";

import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";

import "@fontsource-variable/open-sans";

const BackgroundLayer = () => (
  <div
    className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]
    dark:absolute top-0 dark:z-[-2] dark:h-full dark:w-full dark:bg-[#0e0e0f] dark:bg-[radial-gradient(#ffffff33_1px,#0e1733_1px)] dark:bg-[size:20px_20px]"
  />
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen text-white font-light">
          <BackgroundLayer />
          <Nav />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:projectId" element={<ProjectPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

// ... rest of your code

export default App;
