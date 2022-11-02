import { Link } from 'react-router-dom';
import logoCarrito from '../../assets/img/shopping_cart.svg';
import { useCartContext } from '../../context/cartContext.js';
export const CartWidget = () => {
  const { listCart, totalItemsCart } = useCartContext();
  return (
    <div className="d-flex">
      <Link to="/cart" className="navbar-brand btn position-relative">
        <img className="imgCarrito" src={logoCarrito} alt="icono del carrito" />
        {listCart > '' ? (
          <span className="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-danger">
            {totalItemsCart()}
            <span className="visually-hidden">items a comprar</span>
          </span>
        ) : (
          <span className="d-lg-none"></span>
        )}
      </Link>
    </div>
  );
};
