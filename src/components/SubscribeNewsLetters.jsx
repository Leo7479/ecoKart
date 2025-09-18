const SubscribeNewsLetter = () => {

    return(
        <div className="w-full h-fit min-h-[250px] max-h-[350px] px-2 xl:px-8 py-4 xl:py-8 flex flex-col justify-start items-center gap-y-4 bg-left-top bg-cover bg-norepeat back" style={{backgroundImage:"url(./assets/images/hero-image-01.png)"}}>
            <div className="w-full h-fit max-w-[700px] min-h-[200px] max-h-[400px] px-2 xl:px-8 py-4 xl:py-8 bg-white flex justify-center items-center flex-col rounded-xl shadow-xl gap-y-4">
                <h2 className="text-[1.7rem]/[2rem] md:text-[2rem]/[2.5rem] xl:text-[2.5rem]/[3rem] text-slate-gray font-serif">Subscribe to our Newsletter</h2>
                <form className="w-full h-fit flex justify-between items-center gap-x-4 mt-4 px-2 py-2 border-2 border-black/30 border-solid rounded-3xl">
                    <input type="email" placeholder="Enter your email" required className="bg-white outline-none border-none px-4 py-2 w-full h-[50px]"/>
                    <button type="submit" className="bg-mint-green text-white font-semibold border-2 border-solid border-mint-green hover:bg-forest-green hover:border-forest-green hover:text-eco-sand transition-all duration-200 px-4 py-2 rounded-2xl h-[50px] w-fit ">Subscribe</button>
                </form>
            </div>
        </div>
    );
};
export default SubscribeNewsLetter;