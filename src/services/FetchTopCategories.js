const fetchTopCategories = async () => {
    const response = [
        { id: 1, name: "Clothing", image: "./assets/images/clothing-category.png", forwardTo: "/shop/clothing" },
        { id: 2, name: "Home Goods", image: "./assets/images/home-goods-category.png", forwardTo: "/shop/home" },
        { id: 3, name: "Bedding", image: "./assets/images/bedding-category.png", forwardTo: "/shop/bedding" },
        { id: 4, name: "Furniture", image: "./assets/images/furniture-category.png", forwardTo: "/shop/furniture" },
        { id: 5, name: "Accessories", image: "./assets/images/accessories-category.png", forwardTo: "/shop/accessories" }

    ];
    return response;
}
export default fetchTopCategories;