import { Mail, Clock, MapPin, Send, MessageSquare } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="pt-24 pb-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-brand-primary font-bold tracking-widest uppercase mb-4">Get In Touch</h2>
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase mb-6">Contact <span className="text-brand-primary">Eagle Auto</span> Support</h1>
          <p className="text-neutral-500 text-lg">Our expert team is available to assist with sales inquiries, part sourcing, and order tracking. Reach out and experience professional automotive support.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-brand-primary/10 rounded flex items-center justify-center text-brand-primary mb-6">
              <Mail />
            </div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Sales & Support</h4>
            <a href="mailto:contact@EagleAutoWrecking.com" className="text-brand-primary font-bold hover:underline">contact@EagleAutoWrecking.com</a>
          </div>
          
          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-brand-primary/10 rounded flex items-center justify-center text-brand-primary mb-6">
              <Clock />
            </div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Working Hours</h4>
            <p className="text-neutral-400 text-sm">Mon-Fri: 8am - 5pm EST<br/>Sat: 9am - 1pm EST</p>
          </div>

          <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-brand-primary/10 rounded flex items-center justify-center text-brand-primary mb-6">
              <MapPin />
            </div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Location</h4>
            <p className="text-neutral-400 text-sm">Nationwide Shipping Center<br/>Operations based in USA</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-900 p-10 md:p-16 rounded-2xl border border-neutral-800">
            <h3 className="text-3xl font-display font-bold mb-10 border-l-4 border-brand-primary pl-6">Send A Message</h3>
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-600 tracking-widest">Full Name</label>
                <input type="text" className="w-full bg-black border border-neutral-800 p-4 rounded text-sm focus:border-brand-primary outline-none" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-600 tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-black border border-neutral-800 p-4 rounded text-sm focus:border-brand-primary outline-none" required />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-600 tracking-widest">Subject</label>
                <select className="w-full bg-black border border-neutral-800 p-4 rounded text-sm focus:border-brand-primary outline-none">
                  <option>Part Availability Inquiry</option>
                  <option>Order Tracking Support</option>
                  <option>Warranty & Returns</option>
                  <option>Shipping Quote</option>
                  <option>Other / General</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-600 tracking-widest">Message</label>
                <textarea rows={6} className="w-full bg-black border border-neutral-800 p-4 rounded text-sm focus:border-brand-primary outline-none resize-none" required></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-brand-primary hover:bg-red-600 py-5 rounded font-black uppercase tracking-[0.2em] transform transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                  <Send size={18} /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
