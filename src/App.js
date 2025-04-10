import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header/header';
import ArchivePage from './page/archives/archivePage';
import Manifesto from './page/manifesto/manifesto';
import HomePage from './page/homePage/homePage';
import Footer from './component/footer/footer';
import NotFound from './page/notFound/notFound';
import './index.css'; 

function App() {
  return (
    <Router>
      <div className="pageWrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/archives" element={<ArchivePage />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
