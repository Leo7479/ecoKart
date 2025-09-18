import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify"

const CartCard = ({ item, onUpdate }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onUpdate(item.item, item.size, quantity - 1);
    } else {
      setQuantity(0);
      onUpdate(item.item, item.size, 0);
      toast.error("Product Removed",{
        position: "bottom-right"
      });
    }
  }

  function handleIncreaseQuantity() {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      onUpdate(item.item, item.size, quantity + 1);
    } else {
      alert("Maximum 10 copies of a product can be purchased at a time");
    }
  }

  return (
    <div
      className="cart-card w-full max-w-[900px] flex justify-between items-center gap-x-2 lg:gap-x-0"
      id={`cart-card-${item.item.id}`}
    >
      <div className="w-[30%] flex items-center">
        <img
          src={item.item.imgSrc}
          alt={item.item.imgAlt}
          className="w-full max-w-[150px] rounded-xl"
        />
      </div>

      <div className="w-[50%] flex flex-col">
        <h3 className="font-semibold font-serif">{item.item.name}</h3>
        <p>{item.item.description}</p>
        <p>
          <b>Size: {item.size}</b>
        </p>
        <div className="flex gap-x-2 mt-2">
          <button
            className="w-[40px] h-[30px] rounded-md border-2 border-red-600 text-red-600 font-bold"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-[60px] h-[30px] border-2 border-black/50 rounded-md text-center"
          />
          <button
            className="w-[40px] h-[30px] rounded-md border-2 border-green-600 text-green-600 font-bold"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
      </div>

      <div className="w-[20%] flex justify-end items-center">
        <h4 className="font-bold text-forest-green">₹{quantity * item.item.discountedPrice}</h4>
      </div>
    </div>
  );
};

export default CartCard;
