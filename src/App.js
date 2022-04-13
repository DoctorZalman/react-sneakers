import './styles/styles.css'
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import Drawer from "./components/Drawer/Drawer";
import {useState} from "react";
import MyContext from "./components/Context/Context";


function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const myContextValue = {cartItems, cartOpened, setCartOpened}

  const onClickCart = () => setCartOpened(true)

  return (
      <MyContext.Provider value={myContextValue}>
        <div className="wrapper">
          {cartOpened && <Drawer/>}
          <Header onClickCart={onClickCart}/>
          <MainContainer addCartItems={setCartItems}/>
        </div>
      </MyContext.Provider>
  );
}

export default App;
