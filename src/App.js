import "./styles.css";
import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Info from "./Info";

export const CartContext = createContext();

export default function App() {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [image, setImage] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [add, setAdd] = useState(0);
  const [newId, setNewId] = useState(21);
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const pList = () => {
    const newProduct = {
      id: newId,
      image: image,
      title: heading,
      description: description,
      price: price
    };
    const newData = [...data, newProduct];
    setData(newData);
    setImage("");
    setHeading("");
    setDescription("");
    setPrice("");
    console.log(setData);
    setAdd(0);
    setNewId(newId + 1);
  };

  const remove = (productId) => {
    const filteredData = data.filter((item) => item.id !== productId);
    setData(filteredData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addProduct = () => {
    setAdd(1);
  };

  const hidePop = () => {
    setAdd(0);
  };
  const sortProduct = () => {
    const setSorted = [...data].sort((a, b) => {
      return b.price - a.price;
    });
    setData(setSorted);
  };
  console.log(data);
  return (
    <div className="App">
      <CartContext.Provider
        value={{
          data,
          remove,
          add,
          addProduct,
          hidePop,
          setImage,
          setHeading,
          setDescription,
          setPrice,
          pList,
          sortProduct
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/info/:productId" element={<Info />} />
          </Routes>
        </Router>
      </CartContext.Provider>
    </div>
  );
}
