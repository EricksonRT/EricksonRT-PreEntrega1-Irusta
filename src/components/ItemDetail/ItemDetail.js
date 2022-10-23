import { useCartContext } from '../../context/cartContext.js';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = (props) => {
  const { addItem } = useCartContext();
  const { nombre, descripcion, stock, img, precio = 0 } = props;
  // Esta función viaja por prop,  donde al darle al boton de comprar, nos retona la cantidad seleccionada, y con esos datos, enviamos al contexto
  const onAdd = (cant) => {
    console.log('onAdd:' + cant);
    addItem({ ...props, cant });
  };

  // console.log(props);
  return (
    <div className="row justify-content-center">
      <div className="row ">
        <div className="col-lg-6">
          <div className="card">
            <img
              className="card-img-top"
              src={img}
              alt={'img-avatar/' + nombre}
            />
          </div>
        </div>
        <div className="col-lg-5">
          <h1>{nombre}</h1>
          <div className="mt-3">
            <p className="">{descripcion} </p>
            <h4>stock: {stock}</h4>
            <h3 className="mt-5">$ {precio} ARS</h3>
            <ItemCount
              stockInicial={1}
              stockMaximo={stock}
              onAdd={onAdd}
              nombre={nombre}
              descripcion={descripcion}
              stock={stock}
              img={img}
              precio={precio}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
