/**
 * Himalayan Guest Experience Intelligence Platform
 * Root App — handles routing between pages
 */

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ComponentShowcase from './pages/ComponentShowcase';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-himalaya-snow dark:bg-himalaya-slate transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login"     element={<Login />} />
          <Route path="/components" element={<ComponentShowcase />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
