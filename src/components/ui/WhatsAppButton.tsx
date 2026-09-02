"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";

const { MessageCircle } = LucideIcons;

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/15550000000" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      {MessageCircle ? <MessageCircle size={24} fill="currentColor" /> : "WA"}
    </motion.a>
  );
};
