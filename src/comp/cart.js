import React from 'react';
import './cart.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  // Increase Quantity of cart product
  const incqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart(cart.map((curElm) => 
      curElm.id === product.id ? { ...exist, qty: exist.qty + 1} : curElm
    ));
  };

  // Decrease Quantity of cart product
  const decqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart(cart.map((curElm) => 
      curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm
    ));
  };

  // Removing cart product
  const removeproduct = (product) => {
    setCart(cart.filter((curElm) => curElm.id !== product.id));
  };

  // Total Price
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  // Navigate to User Info Form
  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate('/user-info');
    }
  };

  return (
    <div className='cart'>
      <h3>#cart</h3>
      {cart.length === 0 && (
        <div className='empty_cart'>
          <h2>Your Shopping cart is empty</h2>
          <Link to='/shop'><button>Shop Now</button></Link>
        </div>
      )}
      <div className='container'>
        {cart.map((curElm) => (
          <div className='box' key={curElm.id}>
            <div className='img_box'>
              <img src={curElm.image} alt='' />
            </div>
            <div className='detail'>
              <div className='info'>
                <h4>{curElm.cat}</h4>
                <h3>{curElm.Name}</h3>
                <p>Price: ₹ {curElm.price}</p>
                <p>Total: ₹ {curElm.price * curElm.qty}</p>
              </div>
              <div className='quantity'>
                <button onClick={() => incqty(curElm)}>+</button>
                <input type='number' value={curElm.qty} readOnly />
                <button onClick={() => decqty(curElm)}>-</button>
              </div>
              <div className='icon'>
                <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='bottom'>
        {cart.length > 0 && (
          <>
            <div className='Total'>
              <h4>Sub Total: ₹ {total}</h4>
            </div>
            <button onClick={handleCheckout}>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
