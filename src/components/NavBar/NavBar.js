// Importo link para darle redireccionamiento a cada articulo que se muestre
import { Link, NavLink } from 'react-router-dom';
// importacion de la ruta del logo
import logo from '../../assets/img/UrbanStorelogo.png';
import { CartWidget } from '../CartWidget/CartWidget';
// Centrado del menu
const paddingRight = {
  paddingRight: '15%',
};

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top mb-5">
      <div className="container-fluid shadowNav">
        <Link className="navbar-brand btn" to="/">
          <img src={logo} alt="icon" width="100" height="auto" />
          RST Urban Store's
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={paddingRight}
        >
          <ul className="mx-auto navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link btn txtNav"
                aria-current="page"
                to="category/Mujer"
              >
                Mujer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn txtNav" to="category/Hombre">
                Hombre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn txtNav" to="category/Infantil">
                Infantiles
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle btn txtNav"
                to="category/zapatillas"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Zapatillas
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" to="#">
                    Mujeres
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" to="#">
                    Hombre
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" to="#">
                    Infantiles
                  </button>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn txtNav" to="ofertas">
                Ofertas
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Compoente con el Icono del carrito */}
        <CartWidget />
      </div>
    </nav>
  );
};
