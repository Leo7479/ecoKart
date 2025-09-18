import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartCard from "../components/CartCard";

const ProgressBar = ({ step }) => {
  const progress = (step / 3) * 100;
  return (
    <div className="w-full max-w-[600px] h-3 rounded-full bg-gray-300 overflow-hidden my-4">
      <div
        className="h-full bg-green-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
      <p className="w-fit h-full p-2">{step}/3</p>
    </div>
  );
};

const OrderSummary = ({ products, totalPrice, promo }) => {
  const calculatedTotal =
    totalPrice ??
    products.reduce(
      (sum, item) => sum + item.quantity * item.item.discountedPrice,
      0
    );
  return (
    <>
      {products.length === 0 ? (
        <h2 className="text-lg font-semibold">No items yet. Keep shopping!</h2>
      ) : (
        <>
          <div className="w-full h-full border-2 border-solid border-black/30 rounded-xl p-4">
                    <h1 className="w-fit text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] font-serif">Cart Summary</h1>
                    <div className="text-black/80 flex flex-col gap-y-2">
                      <span className="w-full h-fit flex justify-between items-center"><p>Items</p><p>{products.length}</p></span>
                      <span className="w-full h-fit flex justify-between items-center"><p className="text-forest-green">Discount</p><p className="bg-forest-green text-eco-sand rounded-md px-2">20%</p></span>
                      <span className="w-full h-fit flex justify-between items-center"><p>Total</p><p>₹{totalPrice}</p></span>
                      <span className="w-full h-fit flex justify-between items-center"><p>Delivery Fee</p><p className="text-forest-green">₹0</p></span>
                      <span className="w-full h-fit flex justify-between items-center"><p>Promo Code</p><p className="text-forest-green" id="promo-display">-₹{promo?promo:0}</p></span>
                      <span className="w-full h-fit flex justify-between items-center"><p className="font-semibold text-[1.3rem]">Subtotal</p><p className="text-forest-green font-semibold text-[1.3rem]">₹{totalPrice}</p></span>
                    </div>
                  </div>
        </>
      )}
    </>
  );
};

const AddressForm = ({ onNext, onPrev, products, totalPrice,promo }) => {
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    pincode: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!address.name.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(address.phone)) newErrors.phone = "Phone must be 10 digits";
    if (!/^\d{6}$/.test(address.pincode)) newErrors.pincode = "Pincode must be 6 digits";
    if (!address.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) onNext(address);
  };

  return (
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      <div className="w-full h-fit">
        <OrderSummary products={products} promo={promo} totalPrice={totalPrice} hideButton />
      </div>

      <div className="border rounded-lg p-4 bg-white shadow">
        <h2 className="text-xl font-semibold mb-4">Enter Delivery Address</h2>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Full Name"
            value={address.name}
            onChange={(e) => setAddress({ ...address, name: e.target.value })}
            className="border rounded px-3 py-2 w-full"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Phone Number"
            value={address.phone}
            onChange={(e) => setAddress({ ...address, phone: e.target.value })}
            className="border rounded px-3 py-2 w-full"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Pincode"
            value={address.pincode}
            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
            className="border rounded px-3 py-2 w-full"
          />
          {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
        </div>

        <div className="mb-3">
          <textarea
            placeholder="Full Address"
            value={address.address}
            onChange={(e) => setAddress({ ...address, address: e.target.value })}
            className="border rounded px-3 py-2 w-full"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={onPrev}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
          <button
            onClick={handleContinue}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const PaymentOptions = ({ onNext, onPrev, products, total,promo }) => {
  const [method, setMethod] = useState("");
  const methods = ["UPI", "Net Banking", "Credit/Debit Card", "Cash on Delivery"];

  return (
    <div className="w-full max-w-[600px] flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Select Payment Method</h2>
      <div className="grid grid-cols-2 gap-4">
      {methods.map((m) => (
        <label
          key={m}
          className={`p-3 border-2 border-solid rounded-lg cursor-pointer ${
            method === m ? "border-green-500 bg-green-50" : "border-black/20"
          }`}
        >
          <input
            type="radio"
            name="payment"
            value={m}
            checked={method === m}
            onChange={() => setMethod(m)}
            className="mr-2" hidden
          />
          {m}
        </label>
      ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onPrev}
          className="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => onNext(method)}
          disabled={!method}
          className="px-4 py-2 border rounded-lg bg-green-500 text-white hover:bg-green-600 disabled:bg-gray-400"
        >
          Make Payment & Confirm
        </button>
      </div>

      <OrderSummary products={products} totalPrice={total} promo={promo} />
    </div>
  );
};

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState({});
  const [promo, setPromo] = useState(undefined);
  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(data);
    const total = data.reduce(
      (sum, p) => sum + p.quantity * p.item.discountedPrice,
      0
    );
    setTotalPrice(total);
    const promoAmount = localStorage.getItem("promo") ? JSON.parse(localStorage.getItem("promo")).amount : 0;
    setPromo(promoAmount);
  }, []);

  const handleUpdateCart = (updatedItem, size, newQuantity) => {
    setProducts((prev) => {
      const copy = [...prev];
      const idx = copy.findIndex(
        (cartItem) => cartItem.item.id === updatedItem.id && cartItem.size === size
      );
      if (newQuantity > 0) copy[idx].quantity = newQuantity;
      else copy.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(copy));
      localStorage.setItem(
        "cartPrice",
        copy.reduce((sum, p) => sum + p.quantity * p.item.discountedPrice, 0)
      );
      setTotalPrice(
        copy.reduce((sum, p) => sum + p.quantity * p.item.discountedPrice, 0)
      );
      return copy;
    });
  };

  const handlePaymentSuccess = (method) => {
    sessionStorage.setItem("recentOrder", JSON.stringify(products));
    setProducts([]);
    localStorage.removeItem("cart");
    localStorage.removeItem("cartPrice");
    localStorage.removeItem("promo");
    navigate("/order-placed");
  };

  const handlePromo = (e)=>{
    e.preventDefault();
    if(!localStorage.getItem("promo")){
      const promoCode = document.getElementById("promo-code").value;
      const promoDisplay = document.getElementById("promo-display");
      const discount = totalPrice*0.15;
      const promoJSON = {
        "code":promoCode,
        "amount":discount
      }
      localStorage.setItem("promo",JSON.stringify(promoJSON));
      const newPrice = Math.round(totalPrice-(totalPrice*0.15));
      setPromo(discount);
      setTotalPrice(newPrice);
      localStorage.setItem("cartPrice",newPrice);
    }else{
      alert("You already have a promo applied");
    }
  }

  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col items-center p-4">
        <ProgressBar step={step} />

        {step === 1 && (
          <div className="w-full flex flex-col gap-y-4 items-center">
            <h1 className="text-2xl md:text-3xl font-serif mb-4">Your Cart</h1>

            {products.length === 0 ? (
              <>
                <h1 className="font-semibold text-2xl">
                  No items till now? Keep Shopping...
                </h1>
                <Link to="/browse">
                  <span className="px-4 py-2 border rounded-lg bg-mint-green text-white hover:bg-forest-green">
                    Shop Now
                  </span>
                </Link>
              </>
            ) : 
            (
              <div className="w-full h-full flex flex-col-reverse md:flex-row justify-around items-start gap-x-4 gap-y-8">
                <div className="w-full lg:w-fit h-full flex flex-col justify-center items-start gap-y-4">
                  <h1 className="w-fit h-fit text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] font-serif">Items</h1>
                {  products.map((p) => {
                  return <CartCard
                    key={p.item.id + p.size}
                    item={p}
                    onUpdate={handleUpdateCart}
                  />})
                }
                </div>
                <div className="w-full lg:w-[25%] h-full lg:sticky lg:top-40 flex flex-col justify-start items-start gap-y-4">
                  <OrderSummary products={products} totalPrice={totalPrice} promo={promo}/>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full h-fit px-6 py-2 md:text-[1.3rem] border rounded-xl bg-mint-green text-white hover:bg-forest-green transition-all duration-200"
                  >
                    Proceed
                  </button>
                  <div className="w-full h-fit flex flex-col">
                    <h3>Have a promo code?</h3>
                    <form className="w-full border-2 border-solid border-black/40 rounded-lg p-2 flex">
                      <input type="text" id="promo-code" className="w-full outline-none border-0 mr-2 uppercase"/>
                      <button onClick={handlePromo} className="w-full h-fit whitespace-wrap px-[5px] py-[2px] border-2 border-solid border-mint-green hover:border-forest-green hover:bg-forest-green text-mint-green hover:text-eco-sand transition-all duration-200 rounded-md">Apply Promo</button>
                    </form>
                  </div>
                  </div>
              </div>
            )
          }
          </div>
        )}

        {step === 2 && (
          <AddressForm
            onNext={(form) => {
              setAddress(form);
              setStep(3);
            }}
            onPrev={() => setStep(1)}
            products={products}
            totalPrice={totalPrice}
            promo={promo}
          />
        )}

        {step === 3 && (
          <PaymentOptions
            onNext={handlePaymentSuccess}
            onPrev={() => setStep(2)}
            products={products}
            total={totalPrice}
            promo={promo}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Cart;
