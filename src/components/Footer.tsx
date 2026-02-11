"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <a href="#" className="font-heading text-4xl lowercase font-bold">
              blume<span className="text-white">*</span>
            </a>
            <p className="font-body text-white/70 text-base mt-4 max-w-sm leading-relaxed">
              gardens for everyone. making gardening accessible for everyone, especially those without traditional outdoor spaces.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                { name: "instagram", icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                )},
                { name: "twitter", icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                )},
                { name: "pinterest", icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.5 14.5c-.3 1.5-.5 3-.5 3s.7 0 1.5-.3c.8-.3 1.5-.8 1.5-.8" />
                    <path d="M9 9a3 3 0 0 1 6 0c0 2-3 3-3 6" />
                  </svg>
                )},
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Shop Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading text-sm text-white lowercase font-semibold mb-4">
              shop
            </h4>
            <ul className="space-y-3">
              {["all seeds", "blume*box", "accessories", "gift cards"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href="#"
                    className="font-body text-sm text-white/70 hover:text-white transition-colors lowercase"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Learn Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading text-sm text-white lowercase font-semibold mb-4">
              learn
            </h4>
            <ul className="space-y-3">
              {["growing guides", "plant care", "about us", "contact"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href="#"
                    className="font-body text-sm text-white/70 hover:text-white transition-colors lowercase"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="font-heading text-lg text-white lowercase font-semibold mb-1">
                join our garden community
              </h4>
              <p className="font-body text-sm text-white/60">
                get growing tips, seasonal guides, and exclusive offers
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="your email"
                className="flex-1 md:w-64 px-5 py-3 bg-white/10 border border-white/20 rounded-full font-body text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-rich-green text-white rounded-full font-heading text-sm lowercase font-semibold hover:bg-[#1F3810] transition-colors"
              >
                join
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-body text-xs text-white/50">
            &copy; {new Date().getFullYear()} blume* — all rights reserved
          </p>
          <div className="flex gap-6">
            {["privacy policy", "terms of service", "shipping"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-xs text-white/50 hover:text-white transition-colors lowercase"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
