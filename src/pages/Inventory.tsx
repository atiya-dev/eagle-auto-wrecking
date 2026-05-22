import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Warehouse, Settings, Wind, Mail, Disc, Shield, Eye, Truck, ChevronRight, Lightbulb, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

// Lightweight, robust image render with automatic CSS/SVG skeleton fallback
const LightweightImage = ({ src, alt, fallbackIcon }: { src: string; alt: string; fallbackIcon: React.ReactNode }) => {
  const [hasFailed, setHasFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full bg-neutral-950 flex items-center justify-center overflow-hidden">
      {/* Blueprint grid pattern as backplate / skeleton */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      {!hasFailed ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasFailed(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoading ? 'opacity-0 scale-95' : 'opacity-70 group-hover:opacity-100 group-hover:scale-110'
          }`}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      ) : null}

      {/* Elegant Fallback blueprint icon panel when offline, slow connection or failing */}
      {(hasFailed || isLoading) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl text-neutral-500 group-hover:text-brand-primary group-hover:scale-110 group-hover:border-brand-primary/20 transition-all duration-500 mb-2 shadow-inner">
            {fallbackIcon}
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-600 block">Eagle Verified OEM</span>
        </div>
      )}
    </div>
  );
};

const ALL_PARTS_DATA = [
  {
    id: 1,
    year: '2022',
    make: 'Ford',
    model: 'F-150',
    category: 'Engines',
    name: '2022 Ford F-150 5.0L Dynamic V8 Engine Assembly',
    partId: '#ENG-F150-2022',
    price: '$3,450.00',
    coreCharge: '$500',
    condition: 'Grade A (Tested)',
    mileage: '24,500 Mi',
    imageUrl: 'https://images.unsplash.com/photo-1517524006039-bbdbbb34d081?auto=format&fit=crop&q=40&w=400',
    icon: <Settings size={28} />
  },
  {
    id: 2,
    year: '2021',
    make: 'Chevrolet',
    model: 'Silverado 1500',
    category: 'Engines',
    name: '2021 Chevrolet Silverado 6.2L L87 V8 Engine',
    partId: '#ENG-CHEV-8822',
    price: '$4,200.00',
    coreCharge: '$600',
    condition: 'Grade A+ (Certified)',
    mileage: '18,200 Mi',
    imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=40&w=400',
    icon: <Settings size={28} />
  },
  {
    id: 3,
    year: '2020',
    make: 'Toyota',
    model: 'Camry',
    category: 'Engines',
    name: '2020 Toyota Camry 2.5L 4-Cylinder A25A-FKS Engine',
    partId: '#ENG-TMC-4451',
    price: '$1,850.00',
    coreCharge: '$250',
    condition: 'Grade A (Tested)',
    mileage: '42,100 Mi',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=40&w=400',
    icon: <Settings size={28} />
  },
  {
    id: 4,
    year: '2023',
    make: 'Dodge',
    model: 'Ram 1500',
    category: 'Transmissions',
    name: '2023 Ram 1500 8-Speed Automatic Transmission 8HP75',
    partId: '#TRN-RAM-2023',
    price: '$2,850.00',
    coreCharge: '$400',
    condition: 'Grade A+ (Certified)',
    mileage: '8,900 Mi',
    imageUrl: 'https://images.unsplash.com/photo-1542362567-b05503f35259?auto=format&fit=crop&q=40&w=400',
    icon: <Wind size={28} />
  },
  {
    id: 5,
    year: '2022',
    make: 'Chevrolet',
    model: 'Camaro',
    category: 'Transmissions',
    name: '2022 Camaro Tremec 6-Speed Manual Transmission',
    partId: '#TRN-CAM-9921',
    price: '$3,100.00',
    coreCharge: '$350',
    condition: 'Grade A (Tested)',
    mileage: '12,400 Mi',
    imageUrl: 'https://images.unsplash.com/photo-1580271465108-1389df950374?auto=format&fit=crop&q=40&w=400',
    icon: <Wind size={28} />
  },
  {
    id: 6,
    year: '2021',
    make: 'Honda',
    model: 'Civic',
    category: 'Headlights',
    name: '2021 Honda Civic LED Headlight Assembly - Right Side',
    partId: '#HDL-CIV-1029',
    price: '$450.00',
    coreCharge: '$0',
    condition: 'Grade A (Excellent)',
    mileage: 'N/A',
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=40&w=400',
    icon: <Lightbulb size={28} />
  },
  {
    id: 7,
    year: '2023',
    make: 'Tesla',
    model: 'Model Y',
    category: 'Wheels',
    name: '2023 Tesla Model Y 20" Induction Wheel - OEM Single',
    partId: '#WHL-TSL-0082',
    price: '$390.00',
    coreCharge: '$0',
    condition: 'Grade A (Minor Scratches)',
    mileage: 'N/A',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=40&w=400',
    icon: <Disc size={28} />
  },
  {
    id: 8,
    year: '2022',
    make: 'Dodge',
    model: 'Charger',
    category: 'Body Parts',
    name: '2022 Dodge Charger Front Bumper Cover OEM Black',
    partId: '#BOD-CHG-5511',
    price: '$650.00',
    coreCharge: '$0',
    condition: 'Grade B (Refurbished)',
    mileage: 'N/A',
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-d3b508a0d14b?auto=format&fit=crop&q=40&w=400',
    icon: <Shield size={28} />
  }
];

export const InventoryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Interactive filters
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Sourced uniquely using useMemo for top tier performance
  const filteredParts = useMemo(() => {
    return ALL_PARTS_DATA.filter((part) => {
      // Category filter
      if (activeCategory !== 'All' && part.category !== activeCategory) {
        return false;
      }
      // Year filter
      if (selectedYear && part.year !== selectedYear) {
        return false;
      }
      // Make filter
      if (selectedMake && part.make !== selectedMake) {
        return false;
      }
      // Search term filter
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        return (
          part.name.toLowerCase().includes(query) ||
          part.partId.toLowerCase().includes(query) ||
          part.model.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [activeCategory, selectedYear, selectedMake, searchTerm]);

  const categories = [
    { name: 'All', icon: <Warehouse size={20} /> },
    { name: 'Engines', icon: <Settings size={20} /> },
    { name: 'Transmissions', icon: <Wind size={20} /> },
    { name: 'Body Parts', icon: <Shield size={20} /> },
    { name: 'Wheels', icon: <Disc size={20} /> },
    { name: 'Headlights', icon: <Lightbulb size={20} /> },
  ];

  return (
    <div className="pt-24 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-4 uppercase tracking-tighter">Premium <span className="text-brand-primary">Inventory</span></h1>
          <p className="text-neutral-500 max-w-2xl">Browse our extensive database of tested OEM automotive components. Every part is verified by our specialist dismantling team.</p>
        </div>

        {/* Search & Filters block */}
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Year</label>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-black border border-neutral-800 p-3 rounded text-sm focus:border-brand-primary outline-none text-white cursor-pointer"
              >
                <option value="">All Years</option>
                {Array.from({ length: 10 }, (_, i) => 2026 - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Make</label>
              <select 
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full bg-black border border-neutral-800 p-3 rounded text-sm focus:border-brand-primary outline-none text-white cursor-pointer"
              >
                <option value="">All Makes</option>
                <option value="Ford">Ford</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Dodge">Dodge</option>
                <option value="Tesla">Tesla</option>
              </select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Search by Keyword / Part Number</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="e.g. F-150, V8, #ENG..."
                  className="w-full bg-black border border-neutral-800 p-3 pl-10 rounded text-sm focus:border-brand-primary outline-none text-white"
                />
                <Search size={16} className="absolute left-3 top-3.5 text-neutral-500" />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                setSelectedYear('');
                setSelectedMake('');
                setSearchTerm('');
                setActiveCategory('All');
              }}
              className="px-6 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-4 rounded uppercase tracking-wider transition-all text-xs"
            >
              Reset Filters
            </button>
            <div className="flex-grow bg-brand-primary hover:bg-red-600 text-white font-bold py-4 rounded uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 select-none">
              <Filter size={16} /> Filter Results ({filteredParts.length})
            </div>
          </div>
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
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
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

            {/* Part Cards */}
            {filteredParts.length > 0 ? (
              filteredParts.map((part) => (
                <div key={part.id} className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 group transition-all hover:border-neutral-700">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 aspect-[4/3] bg-black overflow-hidden relative">
                      <LightweightImage 
                        src={part.imageUrl}
                        alt={part.name}
                        fallbackIcon={part.icon}
                      />
                      <div className="absolute top-4 left-4 bg-brand-primary px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                        In Stock
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4 gap-4">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">{part.name}</h3>
                            <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest">Part ID: {part.partId}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-brand-primary text-xl font-display font-black leading-none">{part.price}</p>
                            <p className="text-[10px] text-neutral-500 uppercase mt-1">Core: {part.coreCharge}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-sm bg-black/40 p-3 rounded border border-white/5">
                            <span className="text-neutral-600 font-bold uppercase text-[10px] block mb-1">Condition</span>
                            <span className="text-neutral-300 font-medium">{part.condition}</span>
                          </div>
                          <div className="text-sm bg-black/40 p-3 rounded border border-white/5">
                            <span className="text-neutral-600 font-bold uppercase text-[10px] block mb-1">Mileage / Hours</span>
                            <span className="text-neutral-300 font-medium">{part.mileage}</span>
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
              ))
            ) : (
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-16 text-center">
                <Wrench className="mx-auto text-neutral-600 mb-4" size={48} />
                <h3 className="text-xl font-bold text-white mb-2">No Parts Found Matching Filters</h3>
                <p className="text-neutral-500 max-w-md mx-auto mb-6">Submit an inquiry through the right side form and our dismantling facility specialists will trace it down for you immediately.</p>
                <button 
                  onClick={() => {
                    setSelectedYear('');
                    setSelectedMake('');
                    setSearchTerm('');
                    setActiveCategory('All');
                  }}
                  className="bg-brand-primary hover:bg-red-600 text-white font-bold py-2.5 px-6 rounded uppercase tracking-wider text-xs transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Sidebar Inquiry Form */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="bg-neutral-900 p-8 rounded-xl border border-brand-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 text-brand-primary/5 -translate-y-12 translate-x-12 pointer-events-none">
                   <Mail size={150} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">Can't find your part?</h3>
                <p className="text-neutral-500 text-sm mb-8 font-medium">Our nationwide locator network has real-time access to over 100,000 recycled OEM products. Submit an inquiry today.</p>
                
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Your part request has been logged successfully! An Eagle dispatcher will contact you shortly.'); }}>
                  <input type="text" placeholder="Full Name" className="w-full bg-black border border-neutral-800 p-4 rounded text-sm focus:border-brand-primary outline-none" required />
                  <input type="email" placeholder="Email Address" className="w-full bg-black border border-neutral-800 p-4 rounded text-sm focus:border-brand-primary outline-none" required />
                  <input type="text" placeholder="Part requested (e.g. 2018 Jeep Cher. Radiator)" className="w-full bg-black border border-neutral-800 p-4 rounded text-sm focus:border-brand-primary outline-none" required />
                  <textarea placeholder="Vehicle Details, VIN, or Part Code" rows={4} className="w-full bg-black border border-neutral-800 p-4 rounded text-sm focus:border-brand-primary outline-none resize-none"></textarea>
                  <button className="w-full bg-brand-primary hover:bg-red-600 py-4 rounded font-bold uppercase tracking-widest transition-all cursor-pointer">Submit Inquiry</button>
                </form>
              </div>
              
              <div className="mt-8 bg-black p-8 rounded-xl border border-neutral-800">
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2 text-xs">
                   <Truck className="text-brand-primary animate-pulse" size={18} /> Logistics & Logistics support
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1"><ChevronRight size={14} className="text-brand-primary" /></div>
                    <p className="text-xs text-neutral-400 leading-normal">Fast, secure LTL freight for major mechanical components using premium national dry van carries.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1"><ChevronRight size={14} className="text-brand-primary" /></div>
                    <p className="text-xs text-neutral-400 leading-normal">Both residential liftgate and optimized commercial freight delivery options are available.</p>
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
