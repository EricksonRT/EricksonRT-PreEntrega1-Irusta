import { createContext, useContext, useState } from 'react';
const CartContext = createContext([]);
// Para usar el context en itemDetail
export const useCartContext = () => useContext(CartContext);

// Para no declarar las funciones globales en app, porque no se deberia hacer, lo declaramos acá.
// Este componente, para que pueda usarlo, necesito englobarlo en app. Para que sea posible, usamos children.

const CartContextProvider = ({ children }) => {
  // Estados y funciones globales
  const [listCart, SetListCart] = useState([]);
  const addItem = (producto) => {
    SetListCart([...listCart, producto]);
  };
  const cleanCart = () => {
    SetListCart([]);
  };
  return (
    //   Las funciones van a lo ultimo
    <CartContext.Provider value={{ listCart, addItem, cleanCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
