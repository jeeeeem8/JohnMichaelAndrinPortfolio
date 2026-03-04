import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects'; // ✅ ADDED
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollProgress from './components/ScrollProgress';
import { pageFade } from './animations/variants';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  useEffect(() => {
    // future logic if needed
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col text-black dark:text-white bg-white dark:bg-gray-900 transition-colors">
      
      <ScrollProgress />
      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            <Route
              path="/"
              element={
                <motion.div variants={pageFade} initial="hidden" animate="visible" exit="hidden">
                  <Home />
                </motion.div>
              }
            />

            <Route
              path="/skills"
              element={
                <motion.div variants={pageFade} initial="hidden" animate="visible" exit="hidden">
                  <Skills />
                </motion.div>
              }
            />

            <Route
              path="/education"
              element={
                <motion.div variants={pageFade} initial="hidden" animate="visible" exit="hidden">
                  <Education />
                </motion.div>
              }
            />

            {/* ✅ PROJECTS ROUTE ADDED */}
            <Route
              path="/projects"
              element={
                <motion.div variants={pageFade} initial="hidden" animate="visible" exit="hidden">
                  <Projects />
                </motion.div>
              }
            />

            <Route
              path="/contact"
              element={
                <motion.div variants={pageFade} initial="hidden" animate="visible" exit="hidden">
                  <Contact />
                </motion.div>
              }
            />

            <Route
              path="*"
              element={
                <motion.div variants={pageFade} initial="hidden" animate="visible" exit="hidden">
                  <NotFound />
                </motion.div>
              }
            />

          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;