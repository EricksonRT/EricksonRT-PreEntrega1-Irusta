import { NavLink } from 'react-router-dom';

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
        <img
          className="card-img-top"
          src={datos.img}
          alt={'img-avatar/' + datos.nombre}
        />
        <h2>{datos.nombre}</h2>
      </NavLink>
    </div>
  ));
};
// Lista de todos losproductos
