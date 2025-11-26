import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Education from './pages/Education';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;