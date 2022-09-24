// importacion de la ruta del logo
import logo from "../../assets/img/UrbanStorelogo.png";
import {CartWidget} from '../CartWidget/CartWidget'
// Centrado del menu
const paddingRight={
    paddingRight:"15%"
}

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid shadowNav">
                <button className="navbar-brand btn" to="#">
                    <img src={logo} alt="icon" width="100" height="auto"/>RST Urban Store's</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={paddingRight}>
                    <ul className="mx-auto navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button className="nav-link btn txtNav" aria-current="page" to="#">Mujer</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn txtNav" to="#">Hombre</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn txtNav" to="#">Infantiles</button>
                    </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle btn txtNav" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                            Zapatillas
                            </button>
                            <ul className="dropdown-menu">
                            <li><button className="dropdown-item" to="#">Mujeres</button></li>
                            <li><button className="dropdown-item" to="#">Hombre</button></li>
                            <li><button className="dropdown-item" to="#">Infantiles</button></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <button className="nav-link btn txtNav" to="#">Ofertas</button>
                        </li>
                    </ul>
                </div>
                {/* Compoente con el Icono del carrito */}
                <CartWidget/>
            </div>
      </nav>
    ); 
}