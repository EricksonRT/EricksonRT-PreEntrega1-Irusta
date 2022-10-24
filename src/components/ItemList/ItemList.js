import { NavLink } from 'react-router-dom';
import './ItemList.css';
export const ItemList = (props) => {
  const { datos } = props;
  return datos.map((datos) => (
    <div className="card cardImg" key={datos.id}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'text-decoration-none text-body'
            : 'text-decoration-none text-body'
        }
        to={'/item/' + datos.id}
      >
        <div className="img-container">
          <img
            className="img-thumbnail img-fluid mx-auto d-block"
            src={datos.imagen_url}
            alt={'img-avatar/' + datos.nombre_producto}
          />
        </div>
        <h2>{datos.nombre_producto}</h2>
      </NavLink>
    </div>
  ));
};
// Lista de todos losproductos
