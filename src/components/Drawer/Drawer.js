import React, {useContext} from 'react';
import './Drawer.scss';
import closeButton from "../../img/close-butoon.svg";
import sneakers from "../../img/sneakers-items/1.png"
import emptyCart from "../../img/empty_cart.png"
import MyContext from "../Context/Context";
import axios from "axios";


function Drawer({removeCartItem}) {

  const {cartItems, setCartOpened} = useContext(MyContext);
  const onCloseHandler = (prev) => setCartOpened(!prev);

    const onRemoveItem = (id) => {
    axios.delete(`https://624c246d44505084bc5a0176.mockapi.io/cart/${id}`);
    removeCartItem((prev) => prev.filter(item => item.id !== id))
  }

  return (
      <div className='overlay'>
        <div className="drawer">
          <div className="cart-title">
            <h2>Cart</h2>
            <img src={closeButton} alt="close-button" onClick={onCloseHandler}/>
          </div>
          <div className="items_block">
            {cartItems.map((obj) => (
                <div className="item" key={obj.id}>
                  <img src={sneakers} alt="sneakers"/>
                  <div className="title-price">
                    <span>{obj.title}</span>
                    <p>{obj.price}$</p>
                  </div>
                  <div className="item-close-button">
                    <img src={closeButton} alt="close-button" onClick={() => onRemoveItem(obj.id)}/>
                  </div>
                </div>
            ))}
          </div>
          <div className="cart_empty">
            <img src={emptyCart} alt="empty cart"/>
          </div>
          <div className="item-order">
            <div className="total-price">
              <span>Total:</span>
              <b>{cartItems.price}$</b>
            </div>
            <button>Order</button>
          </div>
        </div>
      </div>
  );
}

export default Drawer;