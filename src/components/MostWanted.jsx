import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import getMostWanted from "../services/FetchMostWanted";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const MostWanted = ()=>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        // Fetch most wanted products data here
        const fetchData = async () => {
            const result = await getMostWanted();
            setData(result);
        };
        fetchData();
        gsap.fromTo("#most-wanted > *", {
            y:50, 
            opacity:0
        }, 
        {
            scrollTrigger:{
                trigger:"#most-wanted > *",
                start: "top 85%",
                end: "bottom 85%"
            },
            y:0,
            opacity:1,
            duration:0.4,
            stagger: 0.4
        });
    },[]);
    return(
        <section id="most-wanted" className="w-full h-fit px-2 xl:px-8 py-4 xl:py-12 flex flex-col justify-start items-start lg:items-start gap-y-8 eco-section bg-gradient-to-b from-eco-sand to-cream-white" >
            <h1 className="eco-heading text-center w-full h-fit text-[1.7rem]/[2rem] md:text-[2rem]/[2.5rem] xl:text-[2.5rem]/[3rem] font-serif font-bold text-center">Most Wanted Products</h1>
            <div className="w-full h-full flex justify-center items-center overflow-hidden">
                <div className="w-max h-fit flex justify-start items-center overflow-x-auto overflow-y-hidden scrollbar-hidden px-4 gap-x-2">
                    {
                        data.map((item)=>{
                            return <ProductCard data={item} key={item.id}/>
                        })
                    }
                </div>
            </div>
            
            <div className="w-full h-fit p-2 xl:p-4 flex justify-center items-center text-lg rounded-2xl">
                <button className="bg-eco-sand rounded-full px-4 py-2 text-forest-green hover:bg-forest-green hover:text-eco-sand hover:shadow-2xl transition-all duration-200">See More</button>    
            </div>
        </section>
    );
}
export default MostWanted;