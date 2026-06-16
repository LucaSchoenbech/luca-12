import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Methodology from './pages/Methodology';
import WorkAreas from './pages/WorkAreas';
import Insights from './pages/Insights';
import TransizioneManagementPmi from './pages/articles/TransizioneManagementPmi';
import ShadowAiPmi from './pages/articles/ShadowAiPmi';
import LifeSciences2026 from './pages/articles/LifeSciences2026';
import PaperPackaging2026 from './pages/articles/PaperPackaging2026';
import AnalyticalHeadhunting from './pages/articles/AnalyticalHeadhunting';
import HumanFactorMA from './pages/articles/HumanFactorMA';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore - React Router v6 Routes accepts key intrinsically but types sometimes complain */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/chi-sono" element={<PageTransition><About /></PageTransition>} />
        <Route path="/metodo" element={<PageTransition><Methodology /></PageTransition>} />
        <Route path="/metodo/headhunting-analitico" element={<PageTransition><AnalyticalHeadhunting /></PageTransition>} />
        <Route path="/aree-di-lavoro" element={<PageTransition><WorkAreas /></PageTransition>} />
        <Route path="/insights" element={<PageTransition><Insights /></PageTransition>} />
        <Route path="/insights/fattore-umano-ma" element={<PageTransition><HumanFactorMA /></PageTransition>} />
        <Route path="/insights/transizione-management-pmi" element={<PageTransition><TransizioneManagementPmi /></PageTransition>} />
        <Route path="/insights/shadow-ai-pmi" element={<PageTransition><ShadowAiPmi /></PageTransition>} />
        <Route path="/insights/life-sciences-2026" element={<PageTransition><LifeSciences2026 /></PageTransition>} />
        <Route path="/insights/paper-packaging-2026" element={<PageTransition><PaperPackaging2026 /></PageTransition>} />
        <Route path="/contatti" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}
