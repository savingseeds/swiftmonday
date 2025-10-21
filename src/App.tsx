import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import RatesAndFees from './pages/RatesAndFees';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Security from './pages/Security';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/rates" element={<RatesAndFees />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </Router>
  );
}

export default App;
