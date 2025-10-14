import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your existing pages
import Home from './pages/Home';

// Import the compliance pages
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page */}
        <Route path="/" element={<Home />} />

        {/* Compliance pages - REQUIRED FOR TRANSAK */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />

        {/* 404 Page - Catch all undefined routes */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
              <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
              <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
              <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Go Home
              </Link>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
