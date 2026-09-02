import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

const { Instagram, Facebook, Mail, Phone, MapPin } = LucideIcons;

export const Footer = () => {
  return (
    <footer className="bg-primary text-surface/90 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-surface/10 pb-16">
        <div className="space-y-6">
          <Link href="/" className="text-3xl font-serif tracking-tight text-surface">
            wood<span className="font-light italic text-accent">work</span>
          </Link>
          <p className="text-sm font-light leading-relaxed max-w-xs">
            Handcrafting premium, sustainable modern furniture that tells a story of craftsmanship and elegance.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-accent transition-colors">
              {Instagram ? <Instagram size={20} /> : null}
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              {Facebook ? <Facebook size={20} /> : null}
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-8 text-surface font-semibold">Quick Links</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
            <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-8 text-surface font-semibold">Our Studio</h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-start space-x-3">
              {MapPin ? <MapPin size={18} className="text-accent mt-0.5" /> : null}
              <span>123 Artisan Way,<br />Craftsville, ST 54321</span>
            </li>
            <li className="flex items-center space-x-3">
              {Phone ? <Phone size={18} className="text-accent" /> : null}
              <span>+1 (555) 000-0000</span>
            </li>
            <li className="flex items-center space-x-3">
              {Mail ? <Mail size={18} className="text-accent" /> : null}
              <span>studio@woodwork.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-8 text-surface font-semibold">Newsletter</h4>
          <p className="text-xs font-light mb-6 leading-relaxed">
            Subscribe to receive inspiration and updates from our workshop.
          </p>
          <form className="flex space-x-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border-b border-surface/20 py-2 text-sm focus:outline-none focus:border-accent w-full"
            />
            <button className="uppercase text-[10px] tracking-widest font-semibold hover:text-accent">Join</button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 text-[10px] uppercase tracking-widest font-light">
        <p>&copy; {new Date().getFullYear()} Woodwork Studio. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
