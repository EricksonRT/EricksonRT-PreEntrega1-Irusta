import { useCartContext } from '../../context/cartContext.js';
import iconTrash from './../../assets/img/icons/trash.svg';
const ItemCartPage = ({ id, img_url, nombre, descripcion, precio, cant }) => {
  const { deleteProducto } = useCartContext();
  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between align-items-start"
        key={id}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold mb-3">
            <div className="img-cart">
              <img
                src={img_url}
                className="img-fluid  float-start"
                alt={nombre}
              />
            </div>
            <h5> {nombre}</h5>
          </div>
          {descripcion}
        </div>
        <div className="d-flex mt-3">
          <h4>${precio}</h4>
        </div>
        <span className="badge spanCant rounded-pill">x {cant}</span>
        <div className="divBtnTrash rounded-pill">
          <button className="badge btn" onClick={() => deleteProducto(id)}>
            <img
              className="btnTrash btn-outline-danger"
              src={iconTrash}
              alt="icon-trash"
            />
          </button>
        </div>
      </li>
    </>
  );
};
export default ItemCartPage;
