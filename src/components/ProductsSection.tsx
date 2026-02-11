"use client";

import { motion } from "motion/react";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "mood boost",
    description: "Brighten your day with sunflowers and marigolds.",
    price: 10,
    size: "50g",
    colors: ["#C4D962", "#8DB843"],
  },
  {
    name: "good cookin'",
    description: "Fresh herbs for your kitchen garden.",
    price: 10,
    size: "50g",
    colors: ["#4A7B3C", "#6B9B5F"],
  },
  {
    name: "clean air",
    description: "Air-purifying plants for healthier spaces.",
    price: 10,
    size: "50g",
    colors: ["#8B6F47", "#A68A6D"],
  },
  {
    name: "just for fun",
    description: "Colorful blooms to brighten any space.",
    price: 10,
    size: "50g",
    colors: ["#E8B84D", "#6BAEB8", "#E17B7B"],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-32 bg-cream">
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
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-black lowercase font-bold"
          >
            our seeds
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-lg md:text-xl text-black/70 mt-4 max-w-xl mx-auto leading-relaxed"
          >
            curated collections for every space and every gardener
          </motion.p>
        </motion.div>

        {/* Product Grid - 4 columns as per Design.json */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              price={product.price}
              size={product.size}
              colors={product.colors}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-black text-black rounded-3xl font-heading text-base lowercase font-semibold hover:bg-black hover:text-white transition-all duration-300"
          >
            view all seeds
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
