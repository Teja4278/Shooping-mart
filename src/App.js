import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import CartPage from './components/Cart';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart((prevCart) => [...prevCart, product]);
  // };

  // const removeFromCart = (index) => {
  //   setCart((prevCart) => prevCart.filter((_, idx) => idx !== index));
  // };

  return (
    // <BrowserRouter>
    //   <Header cartItemCount={cart.length} />
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Home addToCart={addToCart}/>} />
    //       <Route
    //         path="/Shop"
    //         element={<Shop addToCart={addToCart} />}
    //       />
    //       <Route
    //         path="/Cart"
    //         element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
    //       />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
