import { useState } from "react";
import Cart from "./pages/cart/Cart";
import Header from "./components/header/Header";
import Products from "./pages/products/Products";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/footer/Footer";

function App() {
  const [products, setProducts] = useState([
    {
      id: "Corona Chocolate",
      price: 20,
      availableQuantity: 10,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCQc-4qcuO8lfOIBedCPlRlVfHsFzPFqVEcYx-crnX0Q&s=10"
    },
    {
      id: "Friday Icecream",
      price: 15,
      availableQuantity: 12,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWc_QmVR2XUzbWOcVv3CD4n0B-gWJkKZXs467y5jVbaQ&s=10"
    },
    {
      id: "Maxi Lemon",
      price: 12,
      availableQuantity: 5,
      imgSrc: "https://cdn.mafrservices.com/pim-content/EGY/media/product/649584/1741086005/649584_main.jpg?im=Resize=400"
    },
    {
      id: "Tiger",
      price: 10,
      availableQuantity: 17,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ITu3btsFIRfp7QeQR3PeHZgZ0JSGW8f_AOn6BBjMpw&s=10"
    },
    {
      id: "Maxtella",
      price: 45,
      availableQuantity: 20,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTH8Z84nGCZRnb3UZvSsJWN36Wm7y8L_mAn-59nR2Wg&s=10"
    },
    {
      id: "Lamar Milk",
      price: 60,
      availableQuantity: 23,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmGqpj2cBVjRzHy6uD9Yei6-q9g9xZU0t_SXr7xlXeKw&s=10"
    }
  ]);

  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen flex flex-col justify-start">
      <Header />
      <Routes>
        <Route path="/" element={<Products products={products} setProducts={setProducts} cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart products={products} setProducts={setProducts} cart={cart} setCart={setCart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;