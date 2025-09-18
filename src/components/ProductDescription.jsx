import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const ProductDescription = ({data,scrollRef})=>{
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState(1);
    const handleAddToCart = () => {
        if(!size){
            alert("Please select a size");
            return;
        }
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const newItem = {
            item: data,
            quantity: quantity,
            size: size
        };
        const existingItemIndex = existingCart.findIndex(cartItem =>
            cartItem.item.id === data.id && cartItem.size === size
        );

        if (existingItemIndex !== -1) {
            existingCart[existingItemIndex].quantity += parseInt(quantity);
        } else {
            existingCart.push(newItem);
        }
        localStorage.setItem("cart", JSON.stringify(existingCart));
        console.log("Item added to cart:", newItem);
    };

    const handleBuyNow = ()=>{
        console.log("Buy Now =>", data.id);
        localStorage.setItem("buy",JSON.stringify({"item":data,"quantity":quantity,"size":size}));
    };
    function handleQuantity(e){
        setQuantity(e.currentTarget.value);
    }
    function handleSizeSelection(e){
        const sizeSelector = document.querySelectorAll(".product-size-selector");
        const size = document.querySelectorAll(".product-size-value");
        setSize(e.currentTarget.value);
        for(var i=0;i<size.length;i++){
            if(size[i].id===e.currentTarget.id)
                break
        }
        for(let j=0;j<sizeSelector.length;j++){
            sizeSelector[j].classList.remove("bg-forest-green");
            sizeSelector[j].classList.remove("text-white");
            sizeSelector[j].classList.remove("border-forest-green");
            sizeSelector[j].classList.add("text-black");
            sizeSelector[j].classList.add("border-mint-green");
        }
        sizeSelector[i].classList.remove("bg-mint-green");
        sizeSelector[i].classList.remove("text-black");
        sizeSelector[i].classList.add("bg-forest-green");
        sizeSelector[i].classList.add("border-forest-green");
        sizeSelector[i].classList.add("text-white");
    }
    useEffect(()=>{
        console.log(data);
    },[]);
    return(
        <div ref={scrollRef} className="w-full max-h-fit flex flex-col lg:flex-row justify-start items-center gap-x-6 gap-y-6">
            <div className="w-full lg:w-[50%] h-[50%] lg:h-full flex justify-center items-center">
                <img src={data.imgSrc} alt={data.imgAlt} className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-lg"/>
            </div>
            <div className="w-full lg:w-[50%] h-[50%] lg:h-full flex flex-col justify-start items-start gap-y-4">
                <h1 className="font-serif whitespace-wrap w-full h-fit text-[2rem]/[2.5rem] md:text-[2.5rem]/[2.8rem] lg:[3rem]/[3.5rem] text-slate-gray selection:bg-forest-green selection:text-eco-sand">{data.name} Random Texts Random Texts</h1>
                <p className="w-full h-fit text-slate-gray font-text-md">{data.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ad deserunt minus incidunt assumenda, at, saepe, pariatur deleniti dolorum reiciendis quos placeat nulla repudiandae inventore expedita corrupti ex praesentium! Blanditiis, veniam tempore? Dolores earum reiciendis nemo voluptate? Hic voluptate quae sunt, sint doloremque ad vel itaque voluptas eius. Natus dignissimos praesentium facilis delectus corrupti libero illo ipsam vitae fuga ex!</p>
                <div className="w-full h-fit flex justify-start items-center gap-x-2">
                    <span className="font-serif text-[2rem]/[2.2rem] font-bold">₹{data.discountedPrice}</span>
                    <span className="font-serif text-[1.3rem]/[2.2rem]"><del>₹{data.originalPrice}</del></span>
                    <span className="font-serif px-4 py-2 border-2 border-solid border-forest-green rounded-lg text-eco-sand bg-forest-green">{Math.round((data.originalPrice-data.discountedPrice)/data.originalPrice*100)}% Off</span>
                </div>
                <div className="flex justify-start items-center gap-x-4">
                    <span><Star strokeWidth={1} size={25} fill="#2e7d32" color="#2e7d32"/></span>
                    <span className="flex justify-start items-center text-sm gap-x-1"><span className="text-2xl">{data.rating}</span>/5<span className="text-sm">({data.reviews})</span></span>
                </div>
                {
                    data.sizes &&
                    <div className="flex flex-row justify-start items-center gap-x-2">
                        <input type="radio" name="product-size" id="product-size-S" className="product-size-value" value="S" onChange={handleSizeSelection} hidden/>
                        <input type="radio" name="product-size" id="product-size-M" className="product-size-value" value="M" onChange={handleSizeSelection} hidden/>
                        <input type="radio" name="product-size" id="product-size-L" className="product-size-value" value="L" onChange={handleSizeSelection} hidden/>
                        <input type="radio" name="product-size" id="product-size-XL" className="product-size-value" value="XL" onChange={handleSizeSelection} hidden/>
                        <input type="radio" name="product-size" id="product-size-XXL" className="product-size-value" value="XXL" onChange={handleSizeSelection} hidden/>
                        <label htmlFor="product-size-S" className="product-size-selector w-[50px] product-size p-2 text-xl border-2 border-solid border-mint-green rounded-lg text-center cursor-pointer hover:border-forest-green hover:bg-forest-green hover:text-eco-sand active:text-eco-sand active:bg-forest-green focus:text-eco-sand focus:bg-forest-green">
                        S
                        </label>
                        <label htmlFor="product-size-M" className="product-size-selector w-[50px] product-size p-2 text-xl border-2 border-solid border-mint-green rounded-lg text-center cursor-pointer hover:border-forest-green hover:bg-forest-green hover:text-eco-sand active:text-eco-sand active:bg-forest-green focus:text-eco-sand focus:bg-forest-green">
                        M
                        </label>
                        <label htmlFor="product-size-L" className="product-size-selector w-[50px] product-size p-2 text-xl border-2 border-solid border-mint-green rounded-lg text-center cursor-pointer hover:border-forest-green hover:bg-forest-green hover:text-eco-sand active:text-eco-sand active:bg-forest-green focus:text-eco-sand focus:bg-forest-green">
                        L
                        </label>
                        <label htmlFor="product-size-XL" className="product-size-selector w-[50px] product-size p-2 text-xl border-2 border-solid border-mint-green rounded-lg text-center cursor-pointer hover:border-forest-green hover:bg-forest-green hover:text-eco-sand active:text-eco-sand active:bg-forest-green focus:text-eco-sand focus:bg-forest-green">
                        XL
                        </label>
                        <label htmlFor="product-size-XXL" className="product-size-selector w-[50px] product-size p-2 text-xl border-2 border-solid border-mint-green rounded-lg text-center cursor-pointer hover:border-forest-green hover:bg-forest-green hover:text-eco-sand active:text-eco-sand active:bg-forest-green focus:text-eco-sand focus:bg-forest-green">
                        XXL
                        </label>
                    </div>
                }
                <div className="w-full h-fit p-2 flex justify-start items-center flex-col md:flex-row gap-x-2">
                    <h3 className="font-semibold">Quantity</h3>
                    <form >
                        <input type="number" min={1} max={10} defaultValue={1} onChange={handleQuantity} className="w-[80px] h-[40px] border-2 border-solid border-black/50 rounded-lg p-2"/>    
                    </form>
                </div>
                <div className="w-full h-fit flex flex-col lg:flex-row justify-start items-center gap-x-2 gap-y-2">
                    <button onClick={handleAddToCart} className="w-full lg:w-[35%] h-[70px] border-2 border-solid rounded-lg border-mint-green hover:bg-forest-green text-mint-green hover:text-eco-sand hover:border-forest-green transition-all duration-200 text-xl shadow-md">Add To Cart</button>
                    <button onClick={handleBuyNow} className="w-full lg:w-[35%] h-[70px] border-2 border-solid rounded-lg border-mint-green bg-mint-green hover:bg-forest-green hover:border-forest-green transition-all duration-200 text-eco-sand text-xl shadow-md">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDescription;