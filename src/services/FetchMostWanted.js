const getMostWanted = async()=>{
    // try{
    //     const response = await fetch('https://dummyjson.com/products?limit=5');
    //     const json = await response.json();
    //     return json.products;
    // }catch(error){
    //     console.error("Error fetching most wanted products:", error);
    //     return [];
    // }
    const data = [
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
  }];
  return data;
}
export default getMostWanted;