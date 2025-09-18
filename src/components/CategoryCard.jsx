import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const CategoryCard = ({ src, imageSrc, altText }) => {
  useEffect(() => {
    gsap.fromTo(
      ".category-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".category-card",
          start: "top 85%",
          end: "bottom 85%",
        },
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <Link
      to={src}
      className="category-card w-[220px] h-[220px] min-w-[200px] rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex-shrink-0 transform hover:scale-105 transition-all duration-300 bg-eco-sand"
    >
      <div
        className="w-full h-full bg-center bg-cover flex items-end"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="w-full bg-black/60 py-3 text-center text-eco-sand font-semibold text-lg tracking-wide">
          {altText}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
