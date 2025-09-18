const Footer = () => {
    return(
        <footer className="relative w-full h-fit text-eco-sand h-fit p-4 flex flex-col lg:flex-row justify-around items-center gap-4 bg-cover bg-right bg-norepeat pt-20 mt-20" style={{backgroundImage:"url(/assets/images/footer-bg.png)"}}>
            <div className="w-[90px] h-[90px] flex justify-center items-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2">
                <img src="/assets/images/logo.png" alt="logo" className="w-[50px] h-[50px]"/>
            </div>
            <div className="w-full h-fit flex flex-col lg:flex-row justify-around items-start gap-4 max-w-[1400px]">
                <div className="w-full h-[200px] lg:w-1/3 h-fit flex flex-col justify-start items-start gap-2">
                <h2 className="text-green-600">Eco Shop</h2>
                <ul className="text-black">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                </ul>
                </div>
                <div className="w-full h-[200px] lg:w-1/3 h-fit flex flex-col justify-start items-start gap-2">
                <h2 className="text-green-600">Product Categories</h2>
                <ul className="text-black">
                    <li>New</li>
                    <li>Clothing</li>
                    <li>Bath & Bedding</li>
                    <li>Homegoods</li>
                    <li>Furniture</li>
                    <li>Accessories</li>
                    <li>Gift</li>
                </ul>
                </div>
                <div className="w-full h-[200px] lg:w-1/3 h-fit flex flex-col justify-start items-start gap-2">
                <h2 className="text-green-600">Support</h2>
                <ul className="text-black">
                    <li>Shipping</li>
                    <li>Returns</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Affiliates</li>
                </ul>
                </div>
            </div>
            
        </footer>
    );
};
export default Footer;