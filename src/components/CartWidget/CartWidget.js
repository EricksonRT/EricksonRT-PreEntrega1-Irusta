import logoCarrito  from '../../assets/img/shopping_cart.svg';
export const CartWidget = () => {
    return (
      <div className="d-flex">
          <button className="navbar-brand btn" to="#">
            <img className="imgCarrito" src={logoCarrito} alt="icono del carrito" />
          </button>
      </div>
    );
}