import React, {useState} from 'react';
import addButton from "../../img/add-botton.svg";
import favorite from "../../img/favorite.svg";
import addButtonGreen from "../../img/add-button-green.svg";
import sneakers from "../../img/sneakers-items/1.png"
import './Item.scss';

function Item({id, price, title,  onPlus, onClickFavorite}) {
  const [isAdded, setAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({id, price, title});
    setAdded(!isAdded); // змінюємо цією умовою знач на протилежне. По замовчуванню false
    console.log(id);
  }

  return (
      <div className="item" key={id}>
        <div className="favorite">
          <img src={favorite} alt="favorite" onClick={onClickFavorite}/>
        </div>
        <img src={sneakers} alt="sneakers"/>
        <span>{title}</span>
        <div className="item-price">
          <div className="price">
            <span>Price:</span>
            <p>{price}$</p>
          </div>
          <img src={isAdded ? addButtonGreen : addButton} alt="add-button" onClick={onClickPlus}/>
        </div>
      </div>
  );
}

export default Item;