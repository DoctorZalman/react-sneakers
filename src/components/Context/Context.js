import {createContext} from "react";

const MyContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  setCartOpened: () => {}
});

export default MyContext;