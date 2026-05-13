import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, ChevronRight, Star, Clock, Package, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000" 
          alt="Eagle Auto Wrecking Warehouse" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 text-brand-primary font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            <div className="h-1 w-12 bg-brand-primary"></div>
            Eagle Auto Wrecking
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight">
            Premium Quality Used <span className="text-brand-primary">Auto Parts</span> Shipped Nationwide
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-xl leading-relaxed">
            Reliable OEM Engines, Transmissions, Body Parts & Automotive Components. Tested, inspected, and ready for delivery to your door.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/inventory" 
              className="bg-brand-primary hover:bg-red-600 px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:translate-y-[-2px] tracking-wide"
            >
              Find Your Part <Search size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              Request A Quote <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Truck size={24} />, text: "Nationwide Shipping" },
              { icon: <ShieldCheck size={24} />, text: "Tested OEM Parts" },
              { icon: <Package size={24} />, text: "Warranty Available" },
              { icon: <CheckCircle2 size={24} />, text: "Secure Ordering" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-neutral-400 group">
                <div className="text-brand-primary group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Extensive Inventory",
      desc: "Access thousands of high-quality recycled OEM parts for domestic and foreign vehicles.",
      icon: <Package className="w-8 h-8" />
    },
    {
      title: "Quality Assured",
      desc: "Every part is meticulously tested and inspected by our expert dismantlers before shipping.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Fast Shipping",
      desc: "Reliable freight and delivery partners ensure your parts arrive quickly across the USA.",
      icon: <Truck className="w-8 h-8" />
    },
    {
      title: "Fair Pricing",
      desc: "Get premium OEM quality at a fraction of the cost of new dealership parts.",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-4">The Eagle Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Why Choose Eagle Auto Wrecking?</h3>
          </div>
          <p className="text-neutral-400 max-w-sm mb-2">
            Providing affordable, high-quality used automotive components while supporting environmentally responsible vehicle recycling.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-brand-primary/50 transition-all"
            >
              <div className="text-brand-primary mb-6">{feat.icon}</div>
              <h4 className="text-xl font-bold mb-4">{feat.title}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
