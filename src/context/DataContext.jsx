import axios from "axios";
import { createContext, useContext, useState, useMemo } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Fetching all products from API
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=1000");
      const productsData = res.data.products;
      setData(productsData);
    } catch (error) {
      console.log("API fetch error:", error.message);
    }
  };

  // Get unique values (with cleaning) for filters
  const getUniqueCategory = (data, property) => {
    const values = data
      ?.map((curElem) => curElem?.[property])
      .filter((val) => typeof val === "string" && val.trim() !== "");
    return ["All", ...new Set(values)];
  };

  // Memoized lists of unique values
  const categoryOnlyData = useMemo(
    () => getUniqueCategory(data, "category"),
    [data]
  );

  const brandOnlyData = useMemo(
    () => getUniqueCategory(data, "brand"),
    [data]
  );

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchAllProducts,
        categoryOnlyData,
        brandOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to access context
export const getData = () => useContext(DataContext);
