import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategoryForYouSection from "../components/CategoryForYouSection";
import MostWanted from "../components/MostWanted";
import SubscribeNewsLetter from "../components/SubscribeNewsLetters";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs";
import { HashLoader } from "react-spinners";

const Home = () =>{
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const handleLoad = () => setLoading(false);

//   if (document.readyState === "complete") {
//     setLoading(false);
//   } else {
    window.addEventListener("load", handleLoad);
//   }

  // fallback: stop loader after 3s max
  const timer = setTimeout(() => setLoading(false), 3000);

  return () => {
    window.removeEventListener("load", handleLoad);
    clearTimeout(timer);
  };
  },[]);

    return(
        <>
            {loading?
                <div className="w-full h-full absolute flex justify-center items-center bg-black z-[110]">
                    <HashLoader color="#f8f0e3"/>
                </div>
            :            
            <>
                <Navbar/>
                <main>
                    <HeroSection/>
                    <CategoryForYouSection/>
                    <MostWanted/>
                    <SubscribeNewsLetter/>
                    <WhyUs/>
                </main>
                <Footer/>
            </>
        }
        </>
    );
}

export default Home;