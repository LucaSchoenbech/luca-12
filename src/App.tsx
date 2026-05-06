import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Methodology from './pages/Methodology';
import WorkAreas from './pages/WorkAreas';
import Insights from './pages/Insights';
import TransizioneManagementPmi from './pages/articles/TransizioneManagementPmi';
import ShadowAiPmi from './pages/articles/ShadowAiPmi';
import LifeSciences2026 from './pages/articles/LifeSciences2026';
import AnalyticalHeadhunting from './pages/articles/AnalyticalHeadhunting';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-sono" element={<About />} />
          <Route path="/metodo" element={<Methodology />} />
          <Route path="/metodo/headhunting-analitico" element={<AnalyticalHeadhunting />} />
          <Route path="/aree-di-lavoro" element={<WorkAreas />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/transizione-management-pmi" element={<TransizioneManagementPmi />} />
          <Route path="/insights/shadow-ai-pmi" element={<ShadowAiPmi />} />
          <Route path="/insights/life-sciences-2026" element={<LifeSciences2026 />} />
          <Route path="/contatti" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
