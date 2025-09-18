import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import getProducts from "../services/FetchProducts";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ProductDescription from "../components/ProductDescription";
const Product = () =>{
    const {productId} = useParams();
    const [mainProduct, setMainProduct] = useState({});
    const [others, setOthers] = useState([]);
    const descriptionRef = useRef(null);
    useEffect(()=>{
        async function getProduct(id){
            const data = await getProducts();
            let product = {};
            for(let i=0;i<data.length;i++){
                if(data[i].id===id){
                    product=data[i];
                    break;
                }
            }
            setMainProduct(product);
            // Scroll to ProductDescription
            if (window.scrollY > 100 && descriptionRef.current) {
                const offset = 100;
                const elementPosition = descriptionRef.current.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        };
        getProduct(productId);
        async function getSimilar(limit){
            const data = await getProducts(limit);
            setOthers(data);
        }
        getSimilar(4);
    },[productId]);
    
    return(
        <>
        <Navbar/>
        <main className="p-4 lg:p-10 mb-20">
            <ProductDescription data={mainProduct} scrollRef={descriptionRef} />
        </main>
        <section className="w-full h-fit flex flex-col justify-start items-start gap-y-4">
            <h1 className="w-full h-fit font-serif text-[1.7rem]/[2rem] md:text-[2rem]/[2.5rem] lg:text-[2.5rem]/[3rem] flex justify-center items-center">More Similar For You</h1>
            <div className="w-full h-full flex flex-row flex-wrap justify-center align-start gap-x-2">
                {
                    others.map((item)=>{
                        return <ProductCard data={item} key={item.id}/>

                    })
                }
            </div>
        </section>
        <Footer/>
        </>
    );
}

export default Product;