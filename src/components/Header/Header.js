import React from 'react';
import logo from '../../img/logo.png';
import './Header.scss';
import cart from '../../img/cart.svg'
import favorite from '../../img/favorite.svg'
import user from '../../img/user.svg'
const Header = ({onClickCart}) => {
  return (
      <header>
        <div className="left-block">
          <img src={logo} alt="logo"/>
          <div className="site-title">
            <span>React Sneakers</span>
            <p>Shop</p>
          </div>
        </div>
        <div className="right-block">
          <div className="cart" onClick={onClickCart}>
            <img src={cart} alt="cart"/>
            <span>300$</span>
          </div>
          <img src={favorite} alt=""/>
          <img src={user} alt="user"/>
        </div>
      </header>
  );
};

export default Header;
