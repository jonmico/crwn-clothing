import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h3>{quantity}</h3>
            <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
