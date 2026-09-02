"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-linear scale-110"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop')",
          animation: "pan 20s infinite alternate"
        }}
      />
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center text-surface">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block font-light">
            Crafting Timeless Elegance
          </span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.1]">
            Artisan <br /> Woodworking
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base font-light mb-12 opacity-90 leading-relaxed">
            Bespoke furniture designed with intention and handcrafted with passion. Bringing organic modern luxury to your living space.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/projects" 
              className="bg-surface text-primary px-10 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-accent hover:text-surface transition-all duration-300 w-full sm:w-auto"
            >
              Explore Gallery
            </Link>
            <Link 
              href="/contact" 
              className="border border-surface/30 text-surface px-10 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-surface/10 transition-all duration-300 w-full sm:w-auto"
            >
              Book a Consultation
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-surface to-transparent" />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pan {
          from { transform: scale(1.1) translateX(-2%); }
          to { transform: scale(1.1) translateX(2%); }
        }
      `}</style>
    </section>
  );
};
