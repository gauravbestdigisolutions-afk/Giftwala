import React, { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Context create karo
const ProductContext = createContext();

// 2️⃣ Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState("all"); 
  const [cart, setCart] = useState([]); 
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/products/product");
      const data = await res.json();
      if (Array.isArray(data)) setProducts(data);
      else if (data.products) setProducts(data.products);
      else console.error("Unexpected response format:", data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Fetch products by category
  const fetchProductsByCategory = async (category) => {
    try {
      const res = await fetch(`http://localhost:4000/api/products/category/${category}`);
      const data = await res.json();
      if (Array.isArray(data)) setProducts(data);
      else if (data.products) setProducts(data.products);
      else console.error("Unexpected response format:", data);
    } catch (err) {
      console.error(`Error fetching products for category ${category}:`, err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "all") fetchProducts();
    else fetchProductsByCategory(category);
  };

  // User login
  const loginUser = async (email, password) => {
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
      }
      return data;
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  // User register
  const registerUser = async (userData) => {
    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
      }
      return data;
    } catch (err) {
      console.error("Register error:", err);
    }
  };

  // Logout
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedCategory,
        cart,
        setCart,
        user,
        loginUser,
        registerUser,
        logoutUser,
        fetchProducts,
        fetchProductsByCategory,
        filterByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook
export const useProductContext = () => useContext(ProductContext);
