import React, {useEffect, useState} from 'react';
import './MainContainer.scss';
import Item from "../Item/Item";
import search from '../../img/search.svg'
import closeButton from "../../img/close-butoon.svg";
import axios from "axios";

function MainContainer({addCartItems}) {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://624c246d44505084bc5a0176.mockapi.io/items').then(res => setItems(res.data))
    axios.get('https://624c246d44505084bc5a0176.mockapi.io/cart').then(res => addCartItems(res.data))
  }, [])

  const addToCart = (obj) => {
    axios.post('https://624c246d44505084bc5a0176.mockapi.io/cart', obj);
    addCartItems(prev => [...prev, obj]);
  }

  const onChangeInput = (e) => {
    setSearchValue(e.target.value)
  }

  const onClearInput = () => setSearchValue('')
  return (
      <div className='main_container'>
        <div className="title_block">
          <h1>{searchValue ? `Search: ${searchValue}` :  'All sneakers'}</h1>
          <div className="search-block">
            <img src={search} alt="search"/>
            {searchValue && <img src={closeButton} alt="close-button" className="clear-input" onClick={onClearInput}/>}
            <input onChange={onChangeInput} value={searchValue} placeholder="Search..."/>
          </div>
        </div>
        <div className="items-block">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
              <Item
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  onClickFavorite={() => console.log('Натисли на серце')}
                  onPlus={(obj) => addToCart(obj)}
              />
          ))}
        </div>
      </div>
  );
}

export default MainContainer;