const getProducts = async (limit=20)=>{
    // API: https://fakestoreapiserver.reactbd.org/api/products?page=1&perPage=20
    // try{
    //     const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    //     const json = await response.json();
    //     console.log(json);
    //     return json.products;
    // }catch(error){
    //     console.error("Error fetching most wanted products:", error);
    //     return [];
    // }
    const data = 
  [
  {
    "id": "eco001",
    "imgSrc": "/assets/images/eco-tee1.png",
    "imgAlt": "Organic Cotton T-Shirt",
    "name": "Organic Cotton T-Shirt",
    "originalPrice": 1299,
    "discountedPrice": 899,
    "shippingDetails": "Free delivery in 3-5 days",
    "description": "Soft, breathable, and 100% organic cotton. Made with eco-safe dyes.",
    "rating": 4.6,
    "reviews": 112,
    "sizes": ["S", "M", "L", "XL"]
  },
  {
    "id": "eco002",
    "imgSrc": "/assets/images/eco-shirt1.png",
    "imgAlt": "Hemp Blend Casual Shirt",
    "name": "Hemp Blend Casual Shirt",
    "originalPrice": 1799,
    "discountedPrice": 1399,
    "shippingDetails": "Free delivery in 2-4 days",
    "description": "Eco-friendly hemp and cotton blend. Perfect for work or weekend.",
    "rating": 4.4,
    "reviews": 78,
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": "eco003",
    "imgSrc": "/assets/images/eco-pants1.png",
    "imgAlt": "Recycled Cotton Chinos",
    "name": "Recycled Cotton Chinos",
    "originalPrice": 2199,
    "discountedPrice": 1699,
    "shippingDetails": "Delivery in 4-6 days",
    "description": "Slim-fit chinos made with recycled cotton and zero-water dyeing.",
    "rating": 4.5,
    "reviews": 65,
    "sizes": ["L", "XL", "XXL"]
  },
  {
    "id": "eco004",
    "imgSrc": "/assets/images/eco-hoodie1.png",
    "imgAlt": "Organic Fleece Hoodie",
    "name": "Organic Fleece Hoodie",
    "originalPrice": 2499,
    "discountedPrice": 1999,
    "shippingDetails": "Free delivery in 2-3 days",
    "description": "Ultra-soft fleece hoodie made from 100% certified organic cotton.",
    "rating": 4.7,
    "reviews": 150,
    "sizes": ["S", "M", "L", "XL"]
  },
  {
    "id": "eco005",
    "imgSrc": "/assets/images/eco-joggers1.png",
    "imgAlt": "Eco Jogger Pants",
    "name": "Eco Jogger Pants",
    "originalPrice": 1999,
    "discountedPrice": 1499,
    "shippingDetails": "Free delivery in 3-5 days",
    "description": "Comfortable joggers made with sustainable bamboo and organic cotton.",
    "rating": 4.3,
    "reviews": 58,
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": "eco006",
    "imgSrc": "/assets/images/eco-denim1.png",
    "imgAlt": "Sustainable Denim Jeans",
    "name": "Sustainable Denim Jeans",
    "originalPrice": 2799,
    "discountedPrice": 2099,
    "shippingDetails": "Delivery in 3-6 days",
    "description": "Durable jeans made from recycled denim and low-impact washes.",
    "rating": 4.4,
    "reviews": 87,
    "sizes": ["L", "XL", "XXL"]
  },
  {
    "id": "eco007",
    "imgSrc": "/assets/images/eco-polo1.png",
    "imgAlt": "Eco Polo T-Shirt",
    "name": "Eco Polo T-Shirt",
    "originalPrice": 1599,
    "discountedPrice": 1199,
    "shippingDetails": "Free delivery in 2-4 days",
    "description": "Stylish polo with a sustainable twist. Organic cotton and natural dyes.",
    "rating": 4.2,
    "reviews": 48,
    "sizes": ["S", "M", "L"]
  },
  {
    "id": "eco008",
    "imgSrc": "/assets/images/eco-jacket1.png",
    "imgAlt": "Recycled Puffer Jacket",
    "name": "Recycled Puffer Jacket",
    "originalPrice": 3499,
    "discountedPrice": 2799,
    "shippingDetails": "Free delivery in 4-7 days",
    "description": "Warm puffer jacket filled with 100% recycled polyester.",
    "rating": 4.6,
    "reviews": 96,
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": "eco009",
    "imgSrc": "/assets/images/eco-linen1.png",
    "imgAlt": "Linen Blend Shirt",
    "name": "Linen Blend Shirt",
    "originalPrice": 1899,
    "discountedPrice": 1399,
    "shippingDetails": "Delivery in 3-5 days",
    "description": "Lightweight linen-cotton blend shirt. Breathable and biodegradable.",
    "rating": 4.5,
    "reviews": 54,
    "sizes": ["M", "L", "XL", "XXL"]
  },
  {
    "id": "eco010",
    "imgSrc": "/assets/images/eco-tshirt2.png",
    "imgAlt": "Bamboo Fiber T-Shirt",
    "name": "Bamboo Fiber T-Shirt",
    "originalPrice": 1399,
    "discountedPrice": 999,
    "shippingDetails": "Free delivery in 2-3 days",
    "description": "Silky soft tee made from bamboo fibers. Anti-bacterial and moisture-wicking.",
    "rating": 4.7,
    "reviews": 102,
    "sizes": ["S", "M", "L"]
  },
  {
    "id": "eco011",
    "imgSrc": "/assets/images/eco-cargo1.png",
    "imgAlt": "Organic Cargo Pants",
    "name": "Organic Cargo Pants",
    "originalPrice": 2099,
    "discountedPrice": 1599,
    "shippingDetails": "Delivery in 3-5 days",
    "description": "Functional cargo pants with recycled buttons and biodegradable stitching.",
    "rating": 4.3,
    "reviews": 40,
    "sizes": ["L", "XL", "XXL"]
  },
  {
    "id": "eco012",
    "imgSrc": "/assets/images/eco-knit1.png",
    "imgAlt": "Recycled Knit Sweater",
    "name": "Recycled Knit Sweater",
    "originalPrice": 2499,
    "discountedPrice": 1899,
    "shippingDetails": "Free delivery in 3-6 days",
    "description": "Warm knitwear made from post-consumer recycled wool.",
    "rating": 4.4,
    "reviews": 61,
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": "eco013",
    "imgSrc": "/assets/images/eco-blazer1.png",
    "imgAlt": "Eco Formal Blazer",
    "name": "Eco Formal Blazer",
    "originalPrice": 3999,
    "discountedPrice": 3199,
    "shippingDetails": "Delivery in 5-7 days",
    "description": "Elegant and sustainable — made from organic cotton and recycled fibers.",
    "rating": 4.6,
    "reviews": 33,
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": "eco014",
    "imgSrc": "/assets/images/eco-shorts1.png",
    "imgAlt": "Organic Linen Shorts",
    "name": "Organic Linen Shorts",
    "originalPrice": 1499,
    "discountedPrice": 1099,
    "shippingDetails": "Free delivery in 2-4 days",
    "description": "Light and breathable shorts made from 100% organic linen.",
    "rating": 4.2,
    "reviews": 29,
    "sizes": ["S", "M", "L"]
  },
  {
    "id": "eco015",
    "imgSrc": "/assets/images/eco-overshirt1.png",
    "imgAlt": "Canvas Overshirt",
    "name": "Canvas Overshirt",
    "originalPrice": 2299,
    "discountedPrice": 1799,
    "shippingDetails": "Delivery in 3-5 days",
    "description": "Heavy-duty overshirt crafted from organic canvas fabric.",
    "rating": 4.5,
    "reviews": 47,
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": "eco016",
    "imgSrc": "/assets/images/eco-tank1.png",
    "imgAlt": "Eco Tank Top",
    "name": "Eco Tank Top",
    "originalPrice": 999,
    "discountedPrice": 799,
    "shippingDetails": "Free delivery in 3-5 days",
    "description": "Comfortable tank top made with eco-friendly bamboo fibers.",
    "rating": 4.1,
    "reviews": 22,
    "sizes": ["S", "M", "L"]
  },
  {
    "id": "eco017",
    "imgSrc": "/assets/images/eco-vest1.png",
    "imgAlt": "Recycled Vest",
    "name": "Recycled Vest",
    "originalPrice": 2399,
    "discountedPrice": 1799,
    "shippingDetails": "Delivery in 4-6 days",
    "description": "Lightweight and insulated vest made with recycled filling.",
    "rating": 4.6,
    "reviews": 36,
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": "eco018",
    "imgSrc": "/assets/images/eco-trousers1.png",
    "imgAlt": "Eco Slim Trousers",
    "name": "Eco Slim Trousers",
    "originalPrice": 1999,
    "discountedPrice": 1499,
    "shippingDetails": "Free delivery in 3-5 days",
    "description": "Slim fit and planet-friendly, made with renewable fabrics.",
    "rating": 4.4,
    "reviews": 51,
    "sizes": ["S", "M", "L", "XL"]
  },
  {
    "id": "eco019",
    "imgSrc": "/assets/images/eco-pyjamas1.png",
    "imgAlt": "Organic Sleepwear Set",
    "name": "Organic Sleepwear Set",
    "originalPrice": 1799,
    "discountedPrice": 1399,
    "shippingDetails": "Free delivery in 2-3 days",
    "description": "Comfortable pajamas made from breathable and sustainable cotton.",
    "rating": 4.7,
    "reviews": 72,
    "sizes": ["M", "L", "XL"]
  },
  {
    "id": "eco020",
    "imgSrc": "/assets/images/eco-underwear1.png",
    "imgAlt": "Bamboo Boxer Briefs",
    "name": "Bamboo Boxer Briefs",
    "originalPrice": 799,
    "discountedPrice": 599,
    "shippingDetails": "Free delivery in 2-3 days",
    "description": "Soft, stretchy, and eco-conscious underwear made from bamboo fabric.",
    "rating": 4.3,
    "reviews": 88,
    "sizes": ["S", "M", "L"]
  }

]
;
return data.slice(0,limit);
    
}

export default getProducts;