import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Warehouse, Settings, Wind, Mail, Disc, Shield, Eye, Truck, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export const InventoryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: <Warehouse size={20} /> },
    { name: 'Engines', icon: <Settings size={20} /> },
    { name: 'Transmissions', icon: <Wind size={20} /> },
    { name: 'Body Parts', icon: <Shield size={20} /> },
    { name: 'Wheels', icon: <Disc size={20} /> },
    { name: 'Electrical', icon: <Settings size={20} /> },
  ];

  return (
    <div className="pt-24 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-4 uppercase tracking-tighter">Premium <span className="text-brand-primary">Inventory</span></h1>
          <p className="text-neutral-500 max-w-2xl">Browse our extensive database of tested OEM automotive components. Every part is verified by our specialist dismantling team.</p>
        </div>

        {/* Search & Filters */}
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Year</label>
              <select className="w-full bg-black border border-neutral-800 p-3 rounded text-sm focus:border-brand-primary outline-none text-white">
                <option>Select Year</option>
                {Array.from({ length: 26 }, (_, i) => 2026 - i).map(year => (
                  <option key={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Make</label>
              <select className="w-full bg-black border border-neutral-800 p-3 rounded text-sm focus:border-brand-primary outline-none text-white">
                <option>Select Make</option>
                <option>Ford</option>
                <option>Chevrolet</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>BMW</option>
                <option>Mercedes-Benz</option>
                <option>Dodge</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Model</label>
              <select className="w-full bg-black border border-neutral-800 p-3 rounded text-sm focus:border-brand-primary outline-none text-white" disabled>
                <option>Select Make First</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Part Category</label>
              <select className="w-full bg-black border border-neutral-800 p-3 rounded text-sm focus:border-brand-primary outline-none text-white">
                <option>All Parts</option>
                <option>Engines</option>
                <option>Transmissions</option>
                <option>Headlights</option>
                <option>Wheels</option>
              </select>
            </div>
          </div>
          <button className="w-full bg-brand-primary hover:bg-red-600 text-white font-bold py-4 rounded uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
            <Search size={18} /> Search Inventory
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main List */}
          <div className="lg:w-2/3 space-y-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full whitespace-nowrap text-xs font-bold uppercase tracking-widest transition-all ${
                      activeCategory === cat.name 
                      ? 'bg-brand-primary text-white' 
                      : 'bg-neutral-900 text-neutral-500 hover:text-white border border-neutral-800'
                    }`}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Placeholder Items */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 group transition-all hover:border-neutral-700">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 aspect-[4/3] bg-black overflow-hidden relative">
                    <img 
                      src={i === 1 ? "https://images.unsplash.com/photo-1517524006039-bbdbbb34d081?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1542362567-b05503f35259?auto=format&fit=crop&q=80&w=800"} 
                      alt="Part Preview"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-brand-primary px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                      In Stock
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">2022 Ford F-150 5.0L Engine</h3>
                          <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest">Part ID: #ENG-998{i}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-brand-primary text-xl font-display font-black leading-none">$3,450.00</p>
                          <p className="text-[10px] text-neutral-500 uppercase mt-1">Core Charge: $500</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-sm bg-black/40 p-3 rounded border border-white/5">
                          <span className="text-neutral-600 font-bold uppercase text-[10px] block mb-1">Condition</span>
                          <span className="text-neutral-300">Grade A (Tested)</span>
                        </div>
                        <div className="text-sm bg-black/40 p-3 rounded border border-white/5">
                          <span className="text-neutral-600 font-bold uppercase text-[10px] block mb-1">Mileage</span>
                          <span className="text-neutral-300">24,500 Mi</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Link to="/contact" className="flex-1 bg-white/5 hover:bg-white/10 text-center py-3 rounded text-xs font-bold uppercase tracking-widest transition-all border border-white/10">View Details</Link>
                      <Link to="/contact" className="flex-1 bg-brand-primary hover:bg-red-600 text-center py-3 rounded text-xs font-bold uppercase tracking-widest transition-all">Request Quote</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Inquiry Form */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="bg-neutral-900 p-8 rounded-xl border border-brand-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 linear text-brand-primary/5 -translate-y-12 translate-x-12">
                   <Mail size={150} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">Can't find your part?</h3>
                <p className="text-neutral-500 text-sm mb-8">Our nationwide network has access to over 100,000 components. Submit an inquiry and our team will source it for you.</p>
                
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full bg-black border border-neutral-800 p-4 rounded text-sm focus:border-brand-primary outline-none" required />
                  <input type="email" placeholder="Email Address" className="w-full bg-black border border-neutral-800 p-4 rounded text-sm focus:border-brand-primary outline-none" required />
                  <input type="text" placeholder="Part You Need (e.g. 2018 Jeep Gr. Cherokee Radiator)" className="w-full bg-black border border-neutral-800 p-4 rounded text-sm focus:border-brand-primary outline-none" required />
                  <textarea placeholder="Vehicle Details & Additional Info" rows={4} className="w-full bg-black border border-neutral-800 p-4 rounded text-sm focus:border-brand-primary outline-none resize-none"></textarea>
                  <button className="w-full bg-brand-primary hover:bg-red-600 py-4 rounded font-bold uppercase tracking-widest transition-all">Submit Inquiry</button>
                </form>
              </div>
              
              <div className="mt-8 bg-black p-8 rounded-xl border border-neutral-800">
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                   <Truck className="text-brand-primary" size={18} /> Logistics & Support
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1"><ChevronRight size={14} className="text-brand-primary" /></div>
                    <p className="text-xs text-neutral-400 leading-normal">Fast LTL freight for large components via dependable carriers.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1"><ChevronRight size={14} className="text-brand-primary" /></div>
                    <p className="text-xs text-neutral-400 leading-normal">Residential and Commercial delivery options available nationwide.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1"><ChevronRight size={14} className="text-brand-primary" /></div>
                    <p className="text-xs text-neutral-400 leading-normal">Dedicated customer support for all order and shipping tracking.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
