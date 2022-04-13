import React, {useContext} from 'react';
import './Drawer.scss';
import closeButton from "../../img/close-butoon.svg";
import sneakers from "../../img/sneakers-items/1.png"
import MyContext from "../Context/Context";


function Drawer() {

  const {cartItems, setCartOpened} = useContext(MyContext);
  const onCloseHandler = (prev) => setCartOpened(!prev)
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
                    <img src={closeButton} alt="close-button"/>
                  </div>
                </div>
            ))}
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