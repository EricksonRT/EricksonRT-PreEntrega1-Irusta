import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';
export const ItemDetail = (props) => {
  const { nombre, descripcion, stock, img, precio = 0 } = props;

  // console.log(props);
  return (
    <div class="row justify-content-center">
      <div class="row ">
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
            <ItemCount stockInicial={1} stockMaximo={stock} />
          </div>
        </div>
      </div>
    </div>
  );
};
