import { createContext, useContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const CartContextProvider = (props) => {

    const addItemToCartHandler = () => {}
    const removeItemFromCartHandler = () => {}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
