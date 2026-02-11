import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import BrandInfo from "@/components/BrandInfo";
import PackagingShowcase from "@/components/PackagingShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductsSection />
      <BrandInfo />
      <PackagingShowcase />
      <Footer />
    </main>
  );
}
