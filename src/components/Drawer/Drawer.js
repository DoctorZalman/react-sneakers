import React from 'react';
import './Drawer.scss';
import sneakers from "../../img/sneakers.png";
import closeButton from "../../img/close-butoon.svg";

function Drawer() {
  return (
      <div className='overlay'>
        <div className="drawer">
          <div className="cart-title">
            <h2>Cart</h2>
            <img src={closeButton} alt="close-button"/>
          </div>
          <div className="item">
            <img src={sneakers} alt="sneakers"/>
            <div className="title-price">
              <span>Sneakers Mid Size</span>
              <p>300$</p>
            </div>
            <div className="item-close-button">
              <img src={closeButton} alt="close-button"/>
            </div>
          </div>
          <div className="item-order">
            <div className="total-price">
              <span>Total:</span>
              <b>300$</b>
            </div>
            <button>Order</button>
          </div>
        </div>
      </div>
  );
}

export default Drawer;