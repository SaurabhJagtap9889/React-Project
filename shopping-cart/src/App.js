import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import AddItems from './components/Additems';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <AddItems onAdd={addProduct} />
        <ProductList products={products} addToCart={addToCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

