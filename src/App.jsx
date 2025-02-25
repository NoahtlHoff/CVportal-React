import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/project1" element={<Portfolio />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* 404-sida (om du vill ha en) 
        <Route path="*" element={<NotFound />} /> 
        */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App