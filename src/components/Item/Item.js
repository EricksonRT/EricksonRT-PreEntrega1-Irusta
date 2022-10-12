// Importo link para darle redireccionamiento a cada articulo que se muestre
import { NavLink } from 'react-router-dom';
import './Item.css';
export const Item = (props) => {
  const { id, nombre, descripcion, stock, img } = props;
  return (
    <div className="card cardImg">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'text-decoration-none text-body'
            : 'text-decoration-none text-body'
        }
        to={'/item/' + id}
      >
        <img className="card-img-top" src={img} alt={'img-avatar/' + nombre} />
        <h2>{nombre}</h2>
        <div className="card-body">
          <p className="card-text">{descripcion} </p>
          <h4>stock: {stock}</h4>
        </div>
      </NavLink>
    </div>
  );
};
