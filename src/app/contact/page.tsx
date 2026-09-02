"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RevealSection } from "@/components/motion/RevealSection";
import * as LucideIcons from "lucide-react";

const { Mail, Phone, MapPin, Send } = LucideIcons;

export default function ContactPage() {
  return (
    <main className="pt-32">
      <Navbar />
      
      <RevealSection className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <span className="uppercase tracking-[0.3em] text-[10px] text-accent font-semibold mb-4 block">Get In Touch</span>
                <h1 className="text-5xl md:text-7xl font-serif mb-8">Let&apos;s build <br /> something <br /> beautiful.</h1>
                <p className="text-sm md:text-base font-light text-primary/70 leading-relaxed max-w-md">
                  Whether you have a fully-realized design or just the spark of an idea, we&apos;re here to help you bring it to life.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-surface-dark flex items-center justify-center rounded-full text-accent">
                    {MapPin ? <MapPin size={20} /> : null}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-2">Our Studio</h4>
                    <p className="text-sm font-light text-primary/70">123 Artisan Way, Craftsville, ST 54321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-surface-dark flex items-center justify-center rounded-full text-accent">
                    {Mail ? <Mail size={20} /> : null}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-2">Email Us</h4>
                    <p className="text-sm font-light text-primary/70">studio@woodwork.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-surface-dark flex items-center justify-center rounded-full text-accent">
                    {Phone ? <Phone size={20} /> : null}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-2">Call Us</h4>
                    <p className="text-sm font-light text-primary/70">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 shadow-sm border border-primary/5">
              <h3 className="text-2xl font-serif mb-8">Inquiry Form</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-primary/60">Full Name</label>
                    <input type="text" className="w-full bg-surface py-4 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-primary/60">Email Address</label>
                    <input type="email" className="w-full bg-surface py-4 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-primary/60">Subject</label>
                  <select className="w-full bg-surface py-4 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Custom Furniture Project</option>
                    <option>Commercial Commission</option>
                    <option>Restoration Request</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-primary/60">Message</label>
                  <textarea rows={6} className="w-full bg-surface py-4 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                <button className="w-full bg-primary text-surface py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-accent transition-all flex items-center justify-center space-x-3">
                  <span>Send Inquiry</span>
                  {Send ? <Send size={14} /> : null}
                </button>
              </form>
            </div>
          </div>
        </div>
      </RevealSection>

      <Footer />
    </main>
  );
}
