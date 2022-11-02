import { createContext, useContext, useState } from 'react';
const CartContext = createContext([]);
// Para usar el context en itemDetail
export const useCartContext = () => useContext(CartContext);

// Para no declarar las funciones globales en app, porque no se deberia hacer, lo declaramos acá.
// Este componente, para que pueda usarlo, necesito englobarlo en app. Para que sea posible, usamos children.

const CartContextProvider = ({ children }) => {
  // Estados y funciones globales
  const [listCart, SetListCart] = useState([]);
  // Agrega un item al carrito
  const addItem = (producto) => {
    // Comprueba si el producto ya ha sido agregado anteriormente
    if (isInCart(producto.id) === true) {
      SetListCart(
        listCart.map((item) => {
          return item.id === producto.id
            ? { ...item, cant: item.cant + producto.cant }
            : item;
        })
      );
    } else {
      // Agrega un nuevo producto
      SetListCart([...listCart, producto]);
    }
    setCartVacio(false);
  };
  // Comprueba si el producto ya ha sido cargado al carrito
  const isInCart = (id) => {
    return listCart.some((item) => item.id === id);
  };

  // suma la cantidad total de items, en el logo del carrito
  const totalItemsCart = () =>
    listCart.reduce((acum, itemActual) => acum + itemActual.cant, 0);

  // Calcular total
  const precioTotal = () => {
    return listCart.reduce((acum, prod) => acum + prod.cant * prod.precio, 0);
  };

  // Limpia el carrito, y setea un valor de estado para manejar los botones
  const [cartVacio, setCartVacio] = useState(true);
  const cleanCart = () => {
    setCartVacio(true);
    SetListCart([]);
  };

  // Eliminar 1 producto del carrito
  const deleteProducto = (id) => {
    SetListCart(listCart.filter((item) => item.id !== id));
    if (listCart.length === 1) {
      setCartVacio(true);
    }
  };
  return (
    //   Las funciones van a lo ultimo
    <CartContext.Provider
      value={{
        listCart,
        cartVacio,
        addItem,
        cleanCart,
        isInCart,
        precioTotal,
        deleteProducto,
        totalItemsCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
