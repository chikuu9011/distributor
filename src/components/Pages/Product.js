import React, { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import '../css/product.css';

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { id: 1, name: 'Milk', price: 1.50, image: '/assets/images/15.webp' },
    { id: 2, name: 'Cheese', price: 3.00, image: '/assets/images/40268635_1-warana-curddahi-creamy-rich-in-protein.webp' },
    { id: 3, name: 'Yogurt', price: 2.00, image: '/assets/images/warana-kesar-elaichi-shrikhand-500-gm-1000x1000.png' },
  ];

  useEffect(() => {
    // Load cart from cookies when the component mounts
    const savedCart = Cookie.get('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to cookies whenever it changes
    Cookie.set('cart', JSON.stringify(cart), { expires: 7 }); // expires in 7 days
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowCart(true);
  };

  const incrementProduct = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decrementProduct = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  return (
    <div className="product-page">
      <header className="header">
        <h1>Milk Products</h1>
        <div className="cart-indicator" onClick={() => setShowCart(!showCart)}>
          Cart ({cart.length})
        </div>
      </header>

      <div className="products" style={{ margin: "20px auto" }}>
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} className='card-img' alt={product.name} />
            <div className='card-info'>
              <h2 className='text-title'>{product.name}</h2>
              <p></p>
            </div>

            <div className="card-footer">
              <span className="text-title"> ${product.price.toFixed(2)}</span>
              <div className="card-button">
                <svg onClick={() => addToCart(product)} className="svg-icon" viewBox="0 0 20 20">
                  <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                  <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                  <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showCart && (
        <div className="cart-popup">
          <h2>Cart</h2>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <span>Quantity: {item.quantity}</span>
              <button onClick={() => incrementProduct(index)}>+</button>
              <button onClick={() => decrementProduct(index)}>-</button>
            </div>
          ))}
          <button className="next-button" onClick={() => alert('Proceeding to checkout...')}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
