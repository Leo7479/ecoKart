import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { RefreshCw, Filter } from "lucide-react";
import fetchProducts from "../services/FetchProducts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Browse = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    type: "",
    price: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProducts();
      setProducts(result);
      setLoading(false);
    };
    setTimeout(()=>{fetchData()},3000);
  }, []);

  const toggleFilters = () => setFiltersVisible(!filtersVisible);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setSelectedFilters({ category: "", type: "", price: "" });
  };

  // Filtered products
  const filteredProducts = products.filter((product) => {
    return (
      (!selectedFilters.category || product.category === selectedFilters.category) &&
      (!selectedFilters.type || product.type === selectedFilters.type) &&
      (!selectedFilters.price ||
        (selectedFilters.price === "low" && product.price < 500) ||
        (selectedFilters.price === "mid" && product.price >= 500 && product.price < 1500) ||
        (selectedFilters.price === "high" && product.price >= 1500))
    );
  });

  return (
    <>
    <Navbar/>
    <div className="w-full flex flex-col lg:flex-row px-4 xl:px-10 py-6">
      {/* Filters Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-[250px] sticky top-40 h-fit gap-6 p-4 bg-eco-sand rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-slate-gray">Filters</h2>

        <div className="flex flex-col gap-2">
          <label className="text-slate-gray font-semibold">Category</label>
          <select
            name="category"
            value={selectedFilters.category}
            onChange={handleFilterChange}
            className="p-2 rounded border border-slate-gray"
          >
            <option value="">All</option>
            <option value="Clothing">Clothing</option>
            <option value="Bath">Bath</option>
            <option value="Bedding">Bedding</option>
            <option value="Furniture">Furniture</option>
            <option value="Footwear">Footwear</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-slate-gray font-semibold">Type</label>
          <select
            name="type"
            value={selectedFilters.type}
            onChange={handleFilterChange}
            className="p-2 rounded border border-slate-gray"
          >
            <option value="">All</option>
            <option value="Shirt">Shirt</option>
            <option value="Pant">Pant</option>
            <option value="Hoodie">Hoodie</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-slate-gray font-semibold">Price</label>
          <select
            name="price"
            value={selectedFilters.price}
            onChange={handleFilterChange}
            className="p-2 rounded border border-slate-gray"
          >
            <option value="">All</option>
            <option value="low">Below ₹500</option>
            <option value="mid">₹500 - ₹1500</option>
            <option value="high">Above ₹1500</option>
          </select>
        </div>

        <button
          onClick={clearFilters}
          className="mt-4 flex justify-center items-center gap-2 text-forest-green font-semibold hover:underline transition-all"
        >
          <RefreshCw size={18} /> Clear Filters
        </button>
      </aside>

      {/* Main Products */}
      <main className="flex-1 flex flex-col lg:ml-6">
        {/* Mobile Filters Button */}
        <div className="lg:hidden sticky top-[17vh] z-50 mb-4">
          <button
            onClick={toggleFilters}
            className="w-full flex justify-center items-center gap-2 p-2 bg-forest-green text-eco-sand rounded-lg font-semibold"
          >
            <Filter size={18} /> Filters
          </button>

          {/* Mobile Filter Popup */}
          {filtersVisible && (
            <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
              <div className="w-[90%] max-w-[400px] bg-eco-sand p-6 rounded-xl flex flex-col gap-4 relative">
                <button
                  onClick={toggleFilters}
                  className="absolute top-2 right-2 text-forest-green font-bold text-lg"
                >
                  X
                </button>

                <div className="flex flex-col gap-2">
                  <label className="text-slate-gray font-semibold">Category</label>
                  <select
                    name="category"
                    value={selectedFilters.category}
                    onChange={handleFilterChange}
                    className="p-2 rounded border border-slate-gray"
                  >
                    <option value="">All</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Bath">Bath</option>
                    <option value="Bedding">Bedding</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Footwear">Footwear</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-slate-gray font-semibold">Type</label>
                  <select
                    name="type"
                    value={selectedFilters.type}
                    onChange={handleFilterChange}
                    className="p-2 rounded border border-slate-gray"
                  >
                    <option value="">All</option>
                    <option value="Shirt">Shirt</option>
                    <option value="Pant">Pant</option>
                    <option value="Hoodie">Hoodie</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-slate-gray font-semibold">Price</label>
                  <select
                    name="price"
                    value={selectedFilters.price}
                    onChange={handleFilterChange}
                    className="p-2 rounded border border-slate-gray"
                  >
                    <option value="">All</option>
                    <option value="low">Below ₹500</option>
                    <option value="mid">₹500 - ₹1500</option>
                    <option value="high">Above ₹1500</option>
                  </select>
                </div>

                <button
                  onClick={clearFilters}
                  className="mt-4 flex justify-center items-center gap-2 text-forest-green font-semibold hover:underline transition-all"
                >
                  <RefreshCw size={18} /> Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="w-full flex flex-wrap gap-4">
          {loading?
          <>
          <ProductCard key={0} loading={true}/>
          <ProductCard key={1} loading={true}/>
          <ProductCard key={2} loading={true}/>
          </>
          :
          filteredProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Browse;
