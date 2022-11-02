import { Link } from 'react-router-dom';

// Componente que maneja el boton y mensaje para ir a comprar productos
const NotCart = () => {
  return (
    <>
      <div className="flex-column">
        <h5 className="text-center">
          No tienes articulos agregados actualmente :(
        </h5>
        <br />
        <h6 className="text-center">Visita nuestra lista de articulos</h6>
      </div>
      <div className="d-flex justify-content-center pb-5">
        <div className="col-6 ">
          <Link to="/">
            <button className="btn" id="btnBuy">
              ir a comprar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NotCart;
