/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { InventoryPage } from './pages/Inventory';
import { ContactPage } from './pages/Contact';
import { 
  ShippingPolicy, 
  WarrantyPolicy, 
  ReturnsPolicy, 
  TermsConditions, 
  PrivacyPolicy 
} from './pages/Policies';

// A simple scroll-to-top component
const ScrollToTop = () => {
  return null; // react-router-dom v6 doesn't have a built-in one like this without extra logic, but we can use window.scrollTo in a useEffect if needed
  // In our case, we'll just use the standard behavior or add a hook.
};

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopWrapper() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTopWrapper />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Policy Routes */}
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/warranty-policy" element={<WarrantyPolicy />} />
            <Route path="/returns-policy" element={<ReturnsPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            
            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

