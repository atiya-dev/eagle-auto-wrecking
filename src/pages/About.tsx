import { Link } from 'react-router-dom';
import { Shield, Recycle, Mail, Globe, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutPage = () => {
  return (
    <div className="pt-24 bg-black">
      {/* Hero */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-4">Our Mission</h2>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight uppercase">Eagle Auto <span className="text-brand-primary">Wrecking</span> & Recycling</h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
              Eagle Auto Wrecking specializes in supplying reliable recycled OEM auto parts for domestic and foreign vehicles across the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-brand-primary/10 rounded-2xl border border-brand-primary/20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1580271465108-1389df950374?auto=format&fit=crop&q=80&w=800" alt="Warehouse" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-neutral-900 border border-neutral-800 p-8 rounded-xl hidden lg:block">
                <p className="text-5xl font-display font-black text-brand-primary mb-2">100%</p>
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">OEM Certified Parts</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-display font-bold mb-6">Built on Trust and Quality</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Our mission is to provide affordable, high-quality used automotive components while supporting environmentally responsible vehicle recycling practices.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  We focus on customer satisfaction, professional support, fast order processing, and dependable nationwide shipping. With decades of combined experience in the automotive recycling industry, our team understands the importance of getting the right part the first time.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Globe size={24} />, title: "Nationwide Operations", desc: "Serving all 50 states via LTL freight and standard shipping." },
                  { icon: <Recycle size={24} />, title: "Eco-Friendly", desc: "Responsible dismantling and recycling of end-of-life vehicles." },
                  { icon: <Shield size={24} />, title: "OEM Quality", desc: "We only stock genuine manufacturer parts, never aftermarket." },
                  { icon: <Award size={24} />, title: "Expert Support", desc: "Specialist staff to assist with fitment and compatibility." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="text-brand-primary">{item.icon}</div>
                    <h4 className="font-bold uppercase tracking-wide text-sm">{item.title}</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-24 bg-brand-primary">
         <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-5xl font-display font-black text-black uppercase mb-8">Ready to find your part?</h3>
            <Link to="/inventory" className="inline-block bg-black text-white px-10 py-5 rounded font-black uppercase tracking-[0.2em] hover:bg-neutral-900 transition-colors">Start Searching Now</Link>
         </div>
      </section>
    </div>
  );
};
