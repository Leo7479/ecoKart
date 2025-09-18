import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const images = [
  "/assets/images/hero-image-01.png",
  "/assets/images/hero-image-02.png",
  "/assets/images/hero-image-03.png",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden flex justify-center items-center text-eco-sand">
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Hero slide ${index + 1}`}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
          EcoKart – Sustainable Living, Made Simple
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Discover eco-friendly products curated to reduce your footprint
          without compromising quality.
        </p>
        <Link to="/browse">
        <button className="bg-mint-green hover:bg-forest-green text-eco-sand font-semibold px-6 py-3 rounded-xl shadow-lg transition">
          Shop Now
        </button>
        </Link>
        
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-eco-sand rounded-full p-3 z-10 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-eco-sand rounded-full p-3 z-10 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 flex gap-2 z-10">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-mint-green" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
