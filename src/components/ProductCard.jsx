import { Star, Truck } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductSkeletonCard from "./ProductSkeletonCard";

gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ data, loading }) => {
  const discount = data
    ? Math.round(
        (Math.abs(data.originalPrice - data.discountedPrice) /
          data.originalPrice) *
          100
      )
    : 0;

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = {
      item: data,
      quantity: 1,
      size: "L",
    };
    const existingItemIndex = existingCart.findIndex(
      (cartItem) => cartItem.item.id === data.id && cartItem.size === "L"
    );
    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += 1;
    } else {
      existingCart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    toast.success("Added to Cart", { position: "bottom-right" });
  };

  const handleBuyNow = () => {
    console.log("Buy Now =>", data.id);
  };

  useEffect(() => {
    gsap.fromTo(
      ".product-card",
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".product-card",
          start: "top 85%",
          end: "bottom 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="eco-card product-card w-[300px] h-[450px] bg-eco-sand p-4 xl:p-4 m-2 rounded-lg flex flex-col justify-start items-start flex-shrink-0 transition-all duration-200 hover:shadow-lg">
      {loading ? (
        // Skeleton Loader Layout
        <div>
        <ProductSkeletonCard/>
        </div>
        
      ) : (
        <>
          <Link to={`/product/${data.id}`} className="w-full h-[370px] gap-y-2">
            <div className="w-full h-[60%] rounded-lg border-solid shadow-lg overflow-hidden">
              <img src={data.imgSrc} alt={data.imgAlt} className="w-full h-full" />
            </div>
            <div className="w-full h-[35%] my-2 flex flex-col justify-start items-start overflow-hidden gap-y-[5px]">
              <h2 className="text-lg w-full h-[30%] font-semibold whitespace-nowrap text-ellipsis overflow-hidden flex justify-start items-center">
                {data.name}
              </h2>
              <div className="w-full h-[35%] flex justify-start items-center gap-2">
                <span className="text-lg font-semi-bold">
                  ₹{Math.round(data.discountedPrice * 100) / 100}
                </span>
                <span className="text-sm">
                  ₹<del>{Math.round(data.originalPrice * 100) / 100}</del>
                </span>
                <span className="px-2 rounded-lg bg-[rgba(0,0,0,0.75)] text-white">
                  {discount}% off
                </span>
              </div>
              <div className="w-full h-[20%] flex justify-start items-center text-md text-black/80">
                <Star strokeWidth={1} size={25} className="mr-2" />
                4.4/5 (50)
              </div>
              <div className="w-full h-[20%] text-md text-black/80 flex justify-start items-center">
                <Truck strokeWidth={1} size={25} className="mr-2" />
                {data.shippingDetails}
              </div>
            </div>
          </Link>
          <div className="w-full h-full max-h-[50px] flex justify-between items-center">
            <button
              onClick={handleAddToCart}
              className="w-[45%] h-full max-h-[40px] border-2 border-solid border-mint-green bg-eco-sand text-mint-green px-2 hover:border-forest-green hover:text-eco-sand hover:bg-forest-green transition-all duration-200 rounded-lg"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="w-[45%] h-full max-h-[40px] bg-mint-green text-white px-2 hover:bg-forest-green transition-all duration-200 rounded-lg"
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
