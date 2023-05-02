import { CardItemContainer, ItemDetails, Name } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CardItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CardItemContainer>
  );
};

export default CartItem;
