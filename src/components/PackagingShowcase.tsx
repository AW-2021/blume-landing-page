"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const seedPackets = [
  { name: "mood boost", colors: ["#C4D962", "#8DB843"] },
  { name: "good cookin'", colors: ["#4A7B3C", "#6B9B5F"] },
  { name: "clean air", colors: ["#8B6F47", "#A68A6D"] },
  { name: "just for fun", colors: ["#E8B84D", "#6BAEB8", "#E17B7B"] },
];

export default function PackagingShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-cream overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-black lowercase font-extrabold tracking-tight"
          >
            blume<span>*</span>box
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-lg md:text-xl text-black/70 mt-4 max-w-xl mx-auto leading-relaxed"
          >
            everything you need to start your garden journey
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Packaging Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Seed Packets Display */}
            <div className="relative h-[400px] md:h-[500px]">
              {/* Background decoration */}
              <motion.div
                style={{ y: y1 }}
                className="absolute top-10 left-10 w-48 h-48 rounded-full bg-[#C4D962]/20 blur-2xl"
              />
              <motion.div
                style={{ y: y2 }}
                className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#6BAEB8]/15 blur-2xl"
              />

              {/* Seed packets arranged in a stack */}
              <div className="relative flex justify-center items-center h-full">
                {seedPackets.map((packet, index) => (
                  <motion.div
                    key={packet.name}
                    initial={{ opacity: 0, y: 30, rotate: -5 }}
                    whileInView={{ opacity: 1, y: 0, rotate: (index - 1.5) * 8 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ y: -20, rotate: 0, scale: 1.05, zIndex: 20 }}
                    className="absolute w-32 md:w-40 h-44 md:h-56 bg-white rounded-xl shadow-xl border border-gray-100 flex flex-col items-center p-4 cursor-pointer transition-shadow hover:shadow-2xl"
                    style={{
                      left: `calc(50% - 80px + ${(index - 1.5) * 50}px)`,
                      zIndex: index + 1,
                    }}
                  >
                    {/* Brand label */}
                    <span className="font-heading text-xs text-black/60 lowercase tracking-wide font-medium">
                      seed
                    </span>

                    {/* Product name */}
                    <div className="mt-2 text-center">
                      <p className="font-heading text-sm md:text-base font-bold text-black lowercase leading-tight">
                        {packet.name.split(" ").map((word, i) => (
                          <span key={i} className="block">
                            {word}
                          </span>
                        ))}
                      </p>
                    </div>

                    {/* Color circles */}
                    <div className="flex gap-1.5 mt-3">
                      {packet.colors.map((color, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.5 + index * 0.1 + i * 0.05,
                            type: "spring",
                          }}
                          className="w-4 h-4 md:w-5 md:h-5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {/* Circular window */}
                    <div className="mt-auto mb-2">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-gray-200 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                        <div className="flex flex-wrap gap-0.5 justify-center">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1.5 h-2 rounded-full bg-amber-600/60"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Info Booklets & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Booklets */}
            <div className="grid grid-cols-2 gap-4">
              {/* Growing Guide Booklet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer"
              >
                <div className="w-12 h-12 bg-rich-green/10 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D5016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a9 9 0 0 0-9 9c0 6.075 9 13 9 13s9-6.925 9-13a9 9 0 0 0-9-9z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-bold text-black lowercase mb-2">
                  growing guide
                </h4>
                <p className="font-body text-sm text-black/60 leading-relaxed">
                  step-by-step instructions for every seed variety
                </p>
              </motion.div>

              {/* Plant Care Booklet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#C4D962]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8DB843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V8" />
                    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                    <path d="M12 8a4 4 0 0 0-4-4c0 4 4 4 4 4" />
                    <path d="M12 8a4 4 0 0 1 4-4c0 4-4 4-4 4" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-bold text-black lowercase mb-2">
                  plant care tips
                </h4>
                <p className="font-body text-sm text-black/60 leading-relaxed">
                  keep your plants thriving with expert advice
                </p>
              </motion.div>

              {/* Seasonal Calendar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#E8B84D]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8B84D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-bold text-black lowercase mb-2">
                  seasonal calendar
                </h4>
                <p className="font-body text-sm text-black/60 leading-relaxed">
                  know the best time to plant each variety
                </p>
              </motion.div>

              {/* Recipes & Ideas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#6BAEB8]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6BAEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-bold text-black lowercase mb-2">
                  recipes & ideas
                </h4>
                <p className="font-body text-sm text-black/60 leading-relaxed">
                  creative ways to use your homegrown herbs
                </p>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-rich-green to-[#1F3810] rounded-3xl p-8 md:p-10 text-center"
            >
              <h3 className="font-heading text-2xl md:text-3xl text-white lowercase font-bold mb-3">
                get started today
              </h3>
              <p className="font-body text-white/80 text-base md:text-lg mb-6 max-w-md mx-auto leading-relaxed">
                the complete blume*box includes all four seed varieties plus our comprehensive growing guides
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-rich-green rounded-3xl font-heading text-base lowercase font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  shop blume*box — $25
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-white/50 text-white rounded-3xl font-heading text-base lowercase font-semibold transition-all duration-300 hover:border-white"
                >
                  view all products
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
