import { useDispatch, useSelector } from 'react-redux';
import './Cart.css'
import { clearItem, removeItem } from '../utils/store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item)
  const dispatch = useDispatch()
  console.log('cartItems', cartItems)

  const total = cartItems.reduce((a, b) => a + b.price, 0)
  console.log(total)
  const clearCart = () => {
    dispatch(clearItem())
    toast.success('Cart Clear Successfully..!')
  }
  const itemDelete = () => {
    dispatch(removeItem())
    toast.success('Item Removed from cart Successfully..!')
  }

  return (
    <div className="cart">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 className="cart-title">Shopping Cart</h2>
        <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
      </div>
      <div className="cart-items">
        {
          cartItems.map((cartData, index) => (
            <div className="cart-item" key={index}>
              <img src={cartData.photo} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{cartData.name}</h3>
                <p className="cart-item-price">₹{cartData.price}</p>
              </div>
              <button className="cart-item-remove" onClick={itemDelete}>Remove</button>
            </div>
          ))
        }
      </div>
      <div className="cart-summary">
        <h3 className="cart-total">Total: ₹{total}</h3>
        <button className="cart-checkout">Place Order</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
