import CategoryCard from "./CategoryCard";
import fetchTopCategories from "../services/FetchTopCategories";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CategoryForYouSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories data
    const fetchData = async () => {
      const data = await fetchTopCategories();
      setCategories(data);
    };
    fetchData();

    // GSAP heading animation
    gsap.fromTo(
      "#category-for-you h1",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#category-for-you h1",
          start: "top 85%",
          end: "bottom 85%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section
      id="category-for-you"
      className="eco-section bg-gradient-to-r from-cream-white to-eco-sand flex flex-col xl:flex-row justify-around items-center gap-10"
    >
      {/* Left Title */}
      <div className="w-full xl:w-1/5 flex justify-center xl:justify-start">
        <h1 className="eco-heading text-center xl:text-left">
          Categories for You
        </h1>
      </div>

      {/* Scrollable Categories */}
      <div className="scroll-horizontal w-full xl:w-4/5 max-w-[1200px] py-4 px-2 overflow-x-auto hide-scrollbar">
        <div className="w-fit flex flex-row gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              src={category.forwardTo}
              imageSrc={category.image}
              altText={category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryForYouSection;
