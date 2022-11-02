import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import './ItemList.css';
export const ItemList = memo((props) => {
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
            className="img-resp mx-auto d-block"
            src={datos.imagen_url}
            alt={'img-avatar/' + datos.nombre_producto}
          />
        </div>
        <hr />
        <h5>{datos.nombre_producto}</h5>
        <h4>$ {datos.precio} ARS</h4>
      </NavLink>
    </div>
  ));
});

// Lista de todos losproductos
