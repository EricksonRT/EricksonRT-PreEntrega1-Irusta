import { useState } from 'react';
import { useCartContext } from '../../../context/cartContext.js';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
const BuyCart = () => {
  const { listCart, precioTotal, cleanCart } = useCartContext();
  const [formCompra, setFormCompra] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const generarCompra = async (e) => {
    e.preventDefault();
    const orden = {};
    // Setea los valores del comprador
    orden.buyer = {
      name: formCompra.name,
      phone: formCompra.phone,
      email: formCompra.email,
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
    orden.total = precioTotal();

    // Crea el documento "orders" si no existe, y dentro crea un nuevo documento con los datos de la orden de compra
    const db = getFirestore();
    const orders = collection(db, 'orders');
    addDoc(orders, orden) // setDoc(orders, obj, id)
      .then((resp) => console.log('id de compra:' + resp))
      .catch((err) => console.log(err))
      .finally(() => cleanCart());
  };
  // data= (e) de todos los imputs
  const valueImputChange = (data) => {
    setFormCompra({
      ...formCompra,
      [data.target.name]: data.target.value,
    });
    // console.log([[formCompra);
  };

  return (
    <>
      <div className="mt-2 col-7 d-flex mx-auto shadow p-3 mb-5 bg-body rounded mb-5 pb-5">
        <form className="row g-3">
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
              onClick={generarCompra}
            >
              Comprar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default BuyCart;
/* <>
  <input
    type="number"
    name="name"
    value={formCompra.name}
    onChange={handleInputChange}
  />
  <input
    type="text"
    name="phone"
    value={formCompra.phone}
    onChange={handleInputChange}
  />
  <input
    type="email"
    name="email"
    value={formCompra.email}
    onChange={handleInputChange}
  />
</>; */
