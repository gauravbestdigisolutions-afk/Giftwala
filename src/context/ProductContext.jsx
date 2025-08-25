import React, { createContext, useContext, useState } from "react";

// 1️⃣ Context create karo
const ProductContext = createContext();

// 2️⃣ Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // all products
  const [selectedCategory, setSelectedCategory] = useState("all"); // category filter
  const [cart, setCart] = useState([]); // optional cart

  // All products fetch karne ka function
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/products/product");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Category se filtered products fetch karne ka function
  const fetchProductsByCategory = async (category) => {
    try {
      // Backend me agar category filter API hai:
      const res = await fetch(`http://localhost:4000/api/products/category/${category}`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(`Error fetching products for category ${category}:`, err);
    }
  };

  // Selected category update karna (frontend filter ke liye)
  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedCategory,
        cart,
        setCart,
        fetchProducts,
        fetchProductsByCategory,
        filterByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// 3️⃣ Custom hook for easy access
export const useProductContext = () => useContext(ProductContext);
