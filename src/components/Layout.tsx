import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Box, ChevronRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-primary p-2 rounded transform group-hover:rotate-12 transition-transform">
            <Box className="text-white" size={24} />
          </div>
          <div>
            <span className="text-xl font-display font-black tracking-tighter uppercase block leading-none">Eagle Auto</span>
            <span className="text-[10px] text-brand-primary font-bold tracking-[0.2em] uppercase block">Wrecking & Recycling</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-bold tracking-widest uppercase transition-colors hover:text-brand-primary ${isActive ? 'text-brand-primary' : 'text-neutral-400'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/inventory" 
            className="bg-brand-primary hover:bg-red-600 px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-all"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-neutral-900 border-b border-white/5 px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold tracking-widest uppercase text-neutral-300 hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
              <Link 
                to="/inventory" 
                onClick={() => setIsOpen(false)}
                className="bg-brand-primary text-center py-4 rounded font-bold uppercase tracking-widest"
              >
                Find Parts
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-primary p-2 rounded">
                <Box className="text-white" size={20} />
              </div>
              <span className="text-xl font-display font-black tracking-tighter uppercase">Eagle Auto</span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Specializing in reliable, recycled OEM auto parts for domestic and foreign vehicles across the United States. Fast nationwide shipping on quality tested components.
            </p>
            <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
              <Mail size={18} className="text-brand-primary" />
              <a href="mailto:contact@EagleAutoWrecking.com" className="text-sm font-medium">contact@EagleAutoWrecking.com</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-brand-primary"></div> Quick Links
            </h4>
            <ul className="space-y-4">
              <li><Link to="/inventory" className="text-neutral-500 hover:text-brand-primary text-sm transition-colors uppercase tracking-wide">Browse Inventory</Link></li>
              <li><Link to="/about" className="text-neutral-500 hover:text-brand-primary text-sm transition-colors uppercase tracking-wide">Who We Are</Link></li>
              <li><Link to="/contact" className="text-neutral-500 hover:text-brand-primary text-sm transition-colors uppercase tracking-wide">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-brand-primary"></div> Store Policies
            </h4>
            <ul className="space-y-4">
              <li><Link to="/shipping-policy" className="text-neutral-500 hover:text-brand-primary text-sm transition-colors uppercase tracking-wide">Shipping Policy</Link></li>
              <li><Link to="/warranty-policy" className="text-neutral-500 hover:text-brand-primary text-sm transition-colors uppercase tracking-wide">Warranty Terms</Link></li>
              <li><Link to="/returns-policy" className="text-neutral-500 hover:text-brand-primary text-sm transition-colors uppercase tracking-wide">Returns & Refunds</Link></li>
              <li><Link to="/privacy-policy" className="text-neutral-500 hover:text-brand-primary text-sm transition-colors uppercase tracking-wide">Privacy Protection</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-brand-primary"></div> Working Hours
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-neutral-500">
                <span>Mon - Fri:</span>
                <span className="text-neutral-300">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between text-neutral-500">
                <span>Saturday:</span>
                <span className="text-neutral-300">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between text-neutral-500">
                <span>Sunday:</span>
                <span className="text-brand-primary uppercase font-bold">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-xs tracking-widest uppercase">
            &copy; {currentYear} Eagle Auto Wrecking. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/terms-conditions" className="text-neutral-600 hover:text-white text-[10px] uppercase tracking-[0.2em]">Terms & Conditions</Link>
            <Link to="/privacy-policy" className="text-neutral-600 hover:text-white text-[10px] uppercase tracking-[0.2em]">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
