import {BrowserRouter as BRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Browse from "./pages/Browse";
import OrderPlaced from "./pages/OrderPlaced";

const Routing = ()=>{
    return(
        <BRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/browse" element={<Browse/>}/>
                <Route path="/product/:productId" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/order-placed" element={<OrderPlaced/>}/>
            </Routes>
        </BRouter>
    );
}

export default Routing;