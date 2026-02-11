"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  size: string;
  colors: string[];
  index: number;
}

export default function ProductCard({
  name,
  description,
  price,
  size,
  colors,
  index,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.25, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-lg p-6 shadow-sm transition-shadow duration-300"
        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
      >
        {/* Seed Packet Image Area */}
        <div className="relative h-72 mb-6 flex items-center justify-center">
          {/* Seed packet visualization */}
          <motion.div
            animate={{ rotate: isHovered ? 3 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-44 h-60 bg-white rounded-lg shadow-lg border border-gray-100 flex flex-col items-center p-4"
          >
            {/* Brand label at top */}
            <span className="font-heading text-xs text-black lowercase tracking-wide font-medium">
              seed
            </span>

            {/* Product name */}
            <div className="mt-2 text-center">
              <p className="font-heading text-lg font-bold text-black lowercase leading-tight">
                {name.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </p>
            </div>

            {/* Color circles */}
            <div className="flex gap-2 mt-3">
              {colors.map((color, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Circular window */}
            <div className="mt-auto mb-2">
              <motion.div
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-full border-4 border-gray-200 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center"
              >
                {/* Seeds inside window */}
                <div className="flex flex-wrap gap-0.5 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2.5 rounded-full bg-amber-600/70"
                      style={{ transform: `rotate(${i * 30}deg)` }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h3 className="font-heading text-2xl font-bold text-black lowercase leading-tight">
            {name}
          </h3>

          {/* Size and Price Selector */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-black text-sm font-heading"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2v8M2 6h8" strokeLinecap="round" />
              </svg>
              <span>{size}</span>
              <span className="font-semibold">${price}</span>
            </motion.button>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center justify-between pt-2">
            {/* Quantity Control */}
            <div className="flex items-center gap-4 font-heading text-sm">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center text-black hover:bg-gray-100 rounded-full transition-colors"
              >
                -
              </motion.button>
              <span className="w-4 text-center font-medium">{quantity}</span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center text-black hover:bg-gray-100 rounded-full transition-colors"
              >
                +
              </motion.button>
            </div>

            {/* Add Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#1F3810" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-rich-green text-white rounded-full font-heading text-sm lowercase font-semibold transition-colors"
            >
              add
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
