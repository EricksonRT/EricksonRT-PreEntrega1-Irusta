import { useCartContext } from '../../context/cartContext.js';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = (props) => {
  const { addItem } = useCartContext();
  const { id, nombre, descripcion, stock, img_url, precio } = props;
  // Esta función viaja por prop,  donde al darle al boton de comprar, nos retona la cantidad seleccionada, y con esos datos, enviamos al contexto
  const onAdd = (cant) => {
    addItem({ ...props, cant });
  };

  return (
    <div className="row justify-content-center">
      <div className="row ">
        <div className="col-lg-6">
          <div className="card">
            <img
              className="card-img-top"
              src={img_url}
              alt={'img-avatar/' + nombre}
            />
          </div>
        </div>
        <div className="col-lg-5">
          <h1>{nombre}</h1>
          <div className="mt-3">
            <p className="">{descripcion} </p>
            <h3 className="mt-5">$ {precio} ARS</h3>
            <ItemCount
              id={id}
              stockInitial={1}
              stockMax={stock}
              onAdd={onAdd}
              stock={stock}
              precio={precio}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
