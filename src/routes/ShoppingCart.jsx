import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map(item => (
            <li key={item.id}>
              <p>{item.title} - ${item.price}</p>
            </li>
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </ul>
    </div>
  );
};

export default ShoppingCart;
