import React from "react";
import { Leaf, Recycle, Globe } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Eco-Friendly",
    desc: "All our products are crafted with sustainability in mind.",
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: "Recyclable Packaging",
    desc: "We reduce waste with fully recyclable packaging.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Impact",
    desc: "Join us in making a positive change worldwide.",
  },
];

const WhyUs = () => {
  return (
    <section className="eco-section bg-cream-white text-center">
      <h2 className="eco-heading">Why Choose EcoKart?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {features.map((item, i) => (
          <div key={i} className="eco-card p-8 flex flex-col items-center">
            <div className="eco-icon-circle mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-forest-green mb-2">
              {item.title}
            </h3>
            <p className="text-slate-gray">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
