"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function BrandInfoNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background - Grass gradient texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D5016] via-[#3d6b1f] to-[#2D5016]">
        {/* Grass pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grass-pattern-2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M10 80 Q11 40 9 10 Q10 40 12 80" fill="#3d6b1f" opacity="0.5" />
                <path d="M30 80 Q29 35 31 5 Q32 35 33 80" fill="#4a7c24" opacity="0.4" />
                <path d="M50 80 Q51 45 49 15 Q50 45 52 80" fill="#3d6b1f" opacity="0.6" />
                <path d="M70 80 Q69 30 71 0 Q72 30 73 80" fill="#558b2f" opacity="0.4" />
                <circle cx="20" cy="60" r="2" fill="#fff" opacity="0.2" />
                <circle cx="60" cy="40" r="1.5" fill="#fff" opacity="0.15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grass-pattern-2)" />
          </svg>
        </div>

        {/* Animated orbs */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#4a7c24]/40 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#5d9c32]/30 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12">
        {/* Centered Content Block */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Cloud/organic shaped content block */}
            <div
              className="bg-cream p-10 md:p-14 lg:p-16 text-left"
              style={{
                borderRadius: "120px 80px 100px 90px / 90px 100px 80px 120px",
              }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-3xl md:text-4xl text-black lowercase font-bold mb-6"
              >
                our story
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-lg md:text-xl text-black leading-relaxed mb-6"
              >
                greenery in your home is more than just decoration; it&apos;s a breath of life within your living space.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-lg md:text-xl text-black leading-relaxed mb-6"
              >
                we believe everyone deserves a garden, no matter how small their space. our seeds are carefully selected for modern living — apartments, balconies, and sunny windowsills alike.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-body text-lg md:text-xl text-black leading-relaxed mb-8"
              >
                no yard doesn&apos;t have to mean no garden. let your flowers blume*
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-rich-green text-white rounded-3xl font-heading text-base lowercase font-semibold transition-all duration-300 hover:bg-[#1F3810]"
              >
                learn more
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
