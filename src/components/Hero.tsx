"use client";

import { motion } from "motion/react";

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[70vh] min-h-150 w-full overflow-hidden">
      {/* Background - Rich Green Grass Texture Simulation */}
      <div className="absolute inset-0 bg-rich-green">
        {/* Grass texture pattern overlay */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-40" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grass-blades" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                {/* Grass blade shapes */}
                <path d="M5 60 Q6 30 4 10 Q5 30 7 60" fill="#3d6b1f" opacity="0.6" />
                <path d="M15 60 Q14 25 16 5 Q17 25 18 60" fill="#4a7c24" opacity="0.5" />
                <path d="M25 60 Q26 35 24 15 Q25 35 27 60" fill="#3d6b1f" opacity="0.7" />
                <path d="M35 60 Q34 20 36 0 Q37 20 38 60" fill="#558b2f" opacity="0.4" />
                <path d="M45 60 Q46 30 44 12 Q45 30 47 60" fill="#4a7c24" opacity="0.6" />
                <path d="M55 60 Q54 28 56 8 Q57 28 58 60" fill="#3d6b1f" opacity="0.5" />
                {/* Small flower dots */}
                <circle cx="12" cy="45" r="2" fill="#fff" opacity="0.3" />
                <circle cx="42" cy="35" r="1.5" fill="#fff" opacity="0.25" />
                <circle cx="28" cy="50" r="1.8" fill="#fff" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grass-blades)" />
          </svg>
        </div>

        {/* Animated gradient orbs for depth */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 w-125 h-125 rounded-full bg-[#4a7c24] blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-100 h-100 rounded-full bg-[#5d9c32] blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Tagline above */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg md:text-xl text-white/90 lowercase tracking-wide mb-6"
        >
          gardens for everyone
        </motion.p>

        {/* Main Brand Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-heading text-[80px] md:text-[120px] lg:text-[140px] text-white lowercase tracking-tight font-extrabold leading-none"
        >
          blume
          <motion.span
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-white inline-block"
          >
            *
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-lg md:text-xl text-white/90 mt-6 max-w-lg leading-relaxed"
        >
          no yard doesn&apos;t have to mean no garden! let your flowers blume*
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProducts}
          className="mt-10 px-8 py-3 bg-white text-rich-green rounded-3xl font-heading text-base lowercase tracking-wide font-semibold transition-all duration-300 hover:shadow-lg"
        >
          shop seeds
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white/70"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
