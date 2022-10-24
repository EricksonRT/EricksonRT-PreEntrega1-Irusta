import { useCartContext } from '../../context/cartContext.js';
import './cartPage.css';
export const CartPage = () => {
  const { listCart, cleanCart } = useCartContext();
  console.log(listCart);

  return (
    <div>
      <div className="container">
        <h1 className="mt-2 mb-5 text-center">Finaliza tu compra</h1>
        <div className="col-lg-5">
          <ol className="list-group list-group-numbered">
            {listCart.map((producto) => (
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <div className="img-cart" key={producto.id}>
                      <img
                        src={producto.img}
                        className="img-thumbnail float-start"
                        alt={producto.nombre}
                      />
                    </div>
                    {producto.nombre}
                  </div>
                  {producto.descripcion}
                </div>
                <span className="badge bg-danger rounded-pill">
                  x {producto.cant}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <button className=" mt-5 btn btn-danger" onClick={cleanCart}>
          Limpiar carrito
        </button>
      </div>
    </div>
  );
};
