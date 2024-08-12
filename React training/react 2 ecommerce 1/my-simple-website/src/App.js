import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 49.99 },
  { id: 3, name: 'Product 3', price: 19.99 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Simple E-commerce Site</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#cart">Cart ({cart.length})</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section id="shop">
          <h2>Shop</h2>
          <div className="product-list">
            {products.map(product => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

        <section id="cart">
          <h2>Your Cart</h2>
          <div className="cart-list">
            {cart.length > 0 ? (
              cart.map((product, index) => (
                <div key={index} className="cart-item">
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>
                  <button onClick={() => removeFromCart(product)}>Remove</button>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          {cart.length > 0 && (
            <div className="cart-total">
              <h3>Total: ${getTotalPrice()}</h3>
              <button>Checkout</button>
            </div>
          )}
        </section>
      </main>
      
      <footer>
        <p>&copy; 2024 My Simple E-commerce Site</p>
      </footer>
    </div>
  );
}

export default App;