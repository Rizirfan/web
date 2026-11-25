
import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Headphones',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'
    },
    {
      id: 3,
      name: 'Shoes',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'
    },
    {
      id: 4,
      name: 'Camera',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400'
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    window.alert('Product added to cart!');
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((item, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    if (cart.length === 0) {
      window.alert('Your cart is empty!');
      return;
    }

    setCart([]);
    window.alert('Order placed successfully!');
  };

  const submitContact = (e) => {
    e.preventDefault();
    window.alert('Message sent successfully!');
    e.target.reset();
  };

  return (
    <div>

      <header>
        <h2>MyShop</h2>

        <nav>
          <a onClick={() => setPage('home')}>Home</a>
          <a onClick={() => setPage('products')}>Products</a>
          <a onClick={() => setPage('about')}>About</a>
          <a onClick={() => setPage('contact')}>Contact</a>
          <a onClick={() => setPage('cart')}>Cart ({cart.length})</a>
        </nav>
      </header>

      {/* HOME PAGE */}
      {page === 'home' && (
        <>
          <section className="hero">
            <h1>Welcome to MyShop</h1>
            <p>Discover quality products at affordable prices.</p>
            <button onClick={() => setPage('products')}>Shop Now</button>
          </section>

          <section className="features">
            <h2>Why Choose Us?</h2>

            <div className="feature-list">
              <div>
                <h3>Quality Products</h3>
                <p>Find the best products.</p>
              </div>

              <div>
                <h3>Best Prices</h3>
                <p>Shop at affordable prices.</p>
              </div>

              <div>
                <h3>Fast Delivery</h3>
                <p>Quick and safe delivery.</p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* PRODUCTS PAGE */}
      {page === 'products' && (
        <section className="page">
          <h1>Our Products</h1>

          <div className="product-list">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>

                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ABOUT PAGE */}
      {page === 'about' && (
        <section className="page about">
          <h1>About MyShop</h1>
          <p>
            MyShop is an online shopping platform that provides
            quality products at affordable prices.
          </p>
          <p>
            Our mission is to make shopping simple and convenient.
          </p>
        </section>
      )}

      {/* CONTACT PAGE */}
      {page === 'contact' && (
        <section className="page">
          <h1>Contact Us</h1>

          <form onSubmit={submitContact}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </section>
      )}

      {/* CART PAGE */}
      {page === 'cart' && (
        <section className="page">
          <h1>Shopping Cart</h1>

          {cart.length === 0 && <p>Your cart is empty.</p>}

          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>{item.name} - ₹{item.price}</span>
              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          {cart.length > 0 && (
            <button onClick={placeOrder}>Place Order</button>
          )}
        </section>
      )}

      <footer>
        <p>© 2026 MyShop. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
