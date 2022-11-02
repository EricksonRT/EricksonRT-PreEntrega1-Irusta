import { useCartContext } from '../../context/cartContext.js';
// import { ItemCount } from '../ItemCount/ItemCount.js';
import './cartPage.css';
import NotCart from './componentsExtras/NotCart.js';
import { useState } from 'react';
import BuyCart from './componentsExtras/BuyCart.js';
import ItemCartPage from './ItemCartPage.js';
export const CartPage = () => {
  const { listCart, cartVacio, cleanCart, precioTotal } = useCartContext();
  const [toBuy, setToBuy] = useState(false);
  return (
    <div>
      <div className="container box mb-2">
        <h1 className="mt-2 mb-5 text-center">Carrito actual</h1>
        <div className="d-flex justify-content-center ">
          <div className="col-lg-7">
            <ol className="list-group list-group-numbered">
              {listCart.map((producto) => (
                <ItemCartPage
                  key={producto.id}
                  id={producto.id}
                  img_url={producto.img_url}
                  nombre={producto.nombre}
                  descripcion={producto.descripcion}
                  precio={producto.precio}
                  cant={producto.cant}
                />
              ))}
            </ol>
          </div>
        </div>
        {cartVacio ? (
          // no hay nada en el carrito
          <NotCart />
        ) : (
          <>
            {precioTotal() > 0 && (
              <div className="col-6 mt-3 d-flex justify-content-center">
                <h4>Total: ${precioTotal()}</h4>
              </div>
            )}
            <div className="d-flex justify-content-center">
              <button
                className=" mt-4 mb-3 btn btn-danger btnRounded"
                onClick={cleanCart}
              >
                Limpiar todo
              </button>
              <button
                className=" mt-4 mb-3 m-2 btn  btnToBuy"
                onClick={setToBuy}
              >
                Ir a la compra
              </button>
            </div>
            {toBuy === false ? <></> : <BuyCart />}
          </>
        )}
      </div>
    </div>
  );
};
