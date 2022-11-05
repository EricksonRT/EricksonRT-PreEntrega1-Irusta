import { useState } from 'react';
import { useCartContext } from '../../../context/cartContext.js';
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from 'firebase/firestore';
import './BuyCart.css';
import iconCartCheck from './../../../assets/img/icons/cart-check.svg';
import iconClipboard from './../../../assets/img/icons/clipboard.svg';

const BuyCart = () => {
  const { listCart, priceTotal, cleanCart } = useCartContext();
  // Se crea el formulario con los datos del comprador
  const [formBuy, setFormBuy] = useState({
    name: '',
    phone: '',
    email: '',
  });

  // Aca guardo los errores de los imputs para luego mostrarlos
  const [errors, setErrors] = useState('');
  // Con este estado, puedo mostrar el id de compra, y al darle finalizar compra, limpia el cart
  const [finishCartCode, setfinishCartCode] = useState('');

  // conexión de firebase para las querys
  const db = getFirestore();

  const generatePurchase = async (e) => {
    e.preventDefault();
    if (checkInputs() === true) {
      const orden = {};
      // Setea los valores del comprador
      orden.buyer = {
        name: formBuy.name,
        phone: formBuy.phone,
        email: formBuy.email,
      };

      // Setea el array con los productos comprados
      orden.items = listCart.map((producto) => {
        const id = producto.id;
        const name = producto.nombre;
        const price = producto.precio;
        const quantity = producto.cant;
        return { id, name, price, quantity };
      });
      // Setea el total de la compra
      orden.total = priceTotal();

      // Crea el documento "orders" si no existe, y dentro crea un nuevo documento con los datos de la orden de compra
      const orders = collection(db, 'orders');
      addDoc(orders, orden)
        .then((resp) => setfinishCartCode(resp.id))
        .catch((err) => err)
        .finally(() => UpdateProducts());
    }
  };
  // data= (e) de todos los imputs
  const valueImputChange = (data) => {
    setFormBuy({
      ...formBuy,
      [data.target.name]: data.target.value,
    });
  };

  // Valida que no estén vacío los campos
  const checkInputs = () => {
    if (
      formBuy.name === '' ||
      formBuy.phone === '' ||
      formBuy.email === '' ||
      formBuy.emailConfirm === ''
    ) {
      setErrors('Hay uno más campos vacios.');
      return false;
    } else if (formBuy.email !== formBuy.emailConfirm) {
      setErrors('Los correos no coinciden');
      return false;
    }
    errors !== '' && setErrors('');
    return true;
  };

  // Actualiza stock del o los productos de firebase
  const UpdateProducts = async () => {
    const queryCollection = collection(db, 'productos');
    const queryUpdateStock = query(
      queryCollection,
      where(
        documentId(),
        'in',
        listCart.map((prod) => prod.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryUpdateStock).then((resp) =>
      resp.docs.forEach((res) =>
        batch.update(res.ref, {
          stock:
            res.data().stock - listCart.find((item) => item.id === res.id).cant,
        })
      )
    );

    batch.commit();
  };

  // Función para copiar el código de compra generado al board
  const copyToBoard = () => {
    const codeCart = document.querySelector('#inputCode');
    codeCart.select();
    codeCart.setSelectionRange(0, 99999); // para celulares
    document.execCommand('copy');
  };

  return (
    <>
      <div className="mt-2 col-7 d-flex mx-auto shadow p-3 mb-5 bg-body rounded mb-5 pb-5">
        {finishCartCode !== '' ? (
          <>
            <div
              className="modal modal-lg fade static show modal-v2"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="false"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5 text-center"
                      id="staticBackdropLabel"
                    >
                      Compra finalizada.
                    </h1>
                  </div>
                  <div className="modal-body text-center">
                    <div className="alert alertLemon">
                      <div className="d-flex justify-content-center">
                        <img
                          className="iconCheckCart bi bi-cart-check"
                          src={iconCartCheck}
                          alt="icon-cartCheck"
                        />
                        <h1 className="mt-2">¡Listo!</h1>
                      </div>
                      <div className="alert">
                        <h4>Su código de compra es</h4>
                        <div className="row">
                          <div className="d-flex justify-content-center">
                            <div className="col-6">
                              <input
                                id="inputCode"
                                className="form-control text-center"
                                type="text"
                                defaultValue={finishCartCode}
                                readOnly={true}
                              />
                            </div>
                            <div className="col-1">
                              <button
                                className="btn-iconClipToBoard btn btn-outline-secondary"
                                onClick={copyToBoard}
                              >
                                <img
                                  className="iconClipToBoard"
                                  src={iconClipboard}
                                  alt="icon-ClipToBoard"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3>RST Urban Store's agradece su compra.</h3>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btnRounded btnLemon"
                      onClick={cleanCart}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <form className="row g-3">
            {errors !== '' && (
              <div className="mt-2 mb-2 alert alert-danger" role="alert">
                {errors}
              </div>
            )}
            <div className="col-12">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="ejemplo: Eric Laureano irusta"
                onChange={valueImputChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="usuario@gmail.com"
                onChange={valueImputChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Confirmación de correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                name="emailConfirm"
                placeholder="usuario@gmail.com"
                onChange={valueImputChange}
              />
            </div>
            <div className="col-md-6 mx-auto text-center">
              <label className="form-label">Número de celular</label>
              <input
                type="number"
                className="form-control"
                name="phone"
                placeholder="xxxx-xxxxxx"
                onChange={valueImputChange}
              />
            </div>
            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btnRounded btnBuyFinish"
                onClick={generatePurchase}
              >
                Comprar
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};
export default BuyCart;
