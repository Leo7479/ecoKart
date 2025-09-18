import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gsap from "gsap";

const OrderPlaced = () => {
  const [orderItems, setOrderItems] = useState([]);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem("recentOrder")) || [];
    setOrderItems(items);
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen flex flex-col items-center p-6 text-black">
        <div
          ref={containerRef}
          className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg flex flex-col items-center gap-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-forest-green text-center">
            Thank you for your order!
          </h1>
          <p className="text-lg text-black text-center">
            Your order has been successfully placed. Here’s a summary of your purchase:
          </p>

          {/* Purchased Items List */}
          <div className="w-full flex flex-col gap-4">
            {orderItems.length === 0 ? (
              <p className="text-center text-black">No items found.</p>
            ) : (
              orderItems.map((item, idx) => (
                <div
                  key={item.id + item.size}
                  ref={(el) => (itemsRef.current[idx] = el)}
                  className="flex items-center gap-4 border-b border-black pb-2 last:border-0"
                >
                  <img
                    src={item.item.imgSrc}
                    alt={item.item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 flex flex-col">
                    <span className="font-semibold text-gray-800">{item.item.name}</span>
                    <span className="text-gray-500">Quantity: {item.quantity}</span>
                  </div>
                  <span className="font-semibold text-gray-700">
                    ₹{item.item.discountedPrice * item.quantity}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Continue Shopping Button */}
          <Link to="/">
            <button
              ref={buttonRef}
              className="mt-6 px-6 py-3 bg-forest-green text-white rounded-lg hover:bg-mint-green transition-all font-semibold"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderPlaced;
