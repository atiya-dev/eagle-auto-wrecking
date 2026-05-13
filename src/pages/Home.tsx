import { Hero, WhyChooseUs } from '../components/Sections';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Settings, Disc, Lightbulb, Shield, Eye, Truck, Wrench, Database, Star } from 'lucide-react';

const CategoryCard = ({ title, icon, path }: { title: string, icon: any, path: string, key?: any }) => (
  <Link 
    to={`/inventory?category=${title.toLowerCase()}`}
    className="group relative overflow-hidden bg-neutral-900 border border-neutral-800 rounded-xl aspect-[4/3] flex flex-col items-center justify-center gap-4 transition-all hover:border-brand-primary/50"
  >
    <div className="text-neutral-500 group-hover:text-brand-primary transition-colors transform group-hover:scale-110 duration-500">
      {icon}
    </div>
    <h4 className="text-lg font-bold uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors">{title}</h4>
    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
      <ChevronRight className="text-brand-primary" />
    </div>
  </Link>
);

export const HomePage = () => {
  const categories = [
    { title: "Engines", icon: <Settings size={48} />, path: "engines" },
    { title: "Transmissions", icon: <Database size={48} />, path: "transmissions" },
    { title: "Headlights", icon: <Lightbulb size={48} />, path: "headlights" },
    { title: "Wheels & Rims", icon: <Disc size={48} />, path: "wheels" },
    { title: "Suspension", icon: <Wrench size={48} />, path: "suspension" },
    { title: "Body Parts", icon: <Shield size={48} />, path: "body" },
    { title: "Mirrors", icon: <Eye size={48} />, path: "mirrors" },
    { title: "Electrical", icon: <Settings size={48} />, path: "electrical" },
  ];

  const testimonials = [
    { name: "John D.", location: "Texas", text: "Found a hard-to-find engine for my F-150. Shipping was fast and the engine runs perfectly. Highly recommend!" },
    { name: "Sarah M.", location: "California", text: "Great customer service. They helped me verify the part compatibility before I ordered. Save me over $1000 versus the dealer." },
    { name: "Robert K.", location: "New York", text: "The headlight assembly I ordered arrived well-packaged and in excellent condition. Looks practically new." },
  ];

  const faqs = [
    { q: "How long does shipping take?", a: "Most parts ship within 1-3 business days. Delivery typically takes 5-14 business days depending on your location and the size of the part." },
    { q: "Do you offer warranties?", a: "Yes, most mechanical parts like engines and transmissions include a standard 30-day warranty coverage." },
    { q: "Can I track my order?", a: "Absolutely. Once your part is processed and picked up by the carrier, we will email you the tracking details." },
  ];

  return (
    <div className="pt-16">
      <Hero />
      
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-4">Inventory Categories</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Find The Right Part</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <CategoryCard key={idx} {...cat} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/inventory" 
              className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest hover:gap-4 transition-all"
            >
              Browse Full Inventory <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Shipping Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1580271465108-1389df950374?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-4">Nationwide Logistics</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Cross-Country Shipping</h3>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              We ship quality used auto parts across the United States with reliable freight and delivery partners. From small sensors to complete engines, we ensure safe arrival at your commercial or residential address.
            </p>
            <div className="flex gap-4">
              <div className="bg-neutral-900 p-4 rounded border border-neutral-800 flex-1">
                <Truck className="text-brand-primary mb-3" />
                <h4 className="font-bold mb-1">Freight Ready</h4>
                <p className="text-xs text-neutral-500">Heavy duty packaging for mechanical parts</p>
              </div>
              <div className="bg-neutral-900 p-4 rounded border border-neutral-800 flex-1">
                <Shield className="text-brand-primary mb-3" />
                <h4 className="font-bold mb-1">Fully Insured</h4>
                <p className="text-xs text-neutral-500">Every shipment is protected against damage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">What Our Customers Say</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-black p-8 border border-neutral-800 rounded-xl">
                <div className="flex gap-1 text-brand-primary mb-6">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-neutral-400 mb-8 italic">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-neutral-600 text-sm uppercase tracking-tighter">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-4">Common Questions</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Frequently Asked</h3>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-4 text-white">{faq.q}</h4>
                <p className="text-neutral-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
