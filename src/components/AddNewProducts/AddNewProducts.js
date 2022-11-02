import { collection, getFirestore, setDoc } from 'firebase/firestore';
import { useState } from 'react';

// Componente para agregar nuevos productos a la bd
export const AddNewProducts = () => {
  const [newProduct, setNewProduct] = useState([]);
  // Objeto con los valores del producto
  const producto = {};

  // Setea los valores de los campos
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    console.log(newProduct);
  };
  // Agrega el producto
  const addProduct = (e) => {
    e.preventDefault();
    producto.categoria = newProduct.categoria;
    producto.descripcion = newProduct.descripcion;
    producto.imagen_url = newProduct.imagen_url;
    producto.nombre_producto = newProduct.nombre_producto;
    producto.precio = newProduct.precio;
    producto.stock = newProduct.stock;
    //Agrega el nuevo producto a firestore
    const db = getFirestore();
    const db_productos = collection(db, 'productos');
    setDoc(db_productos, producto) //
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => console.log('agregado'));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center">
            <form className="" onClick={addProduct}>
              <div className="col-lg-12">
                <div className="form-control">
                  <label htmlFor="categoria">Tipo de producto</label>
                  <select
                    className="form-select"
                    id="categoria"
                    name="categoria"
                    onChange={handleChange}
                    defaultValue={'DEFAULT'}
                  >
                    <option value="DEFAULT" disabled={true}>
                      Seleccioná una categoria
                    </option>
                    <option value="mujer">Ropa de mujer</option>
                    <option value="hombre">Ropa de hombre</option>
                    <option value="infantil">Ropa infantil</option>
                    <option value="zapatillas-de-mujer">
                      Zapatillas de mujer
                    </option>
                    <option value="zapatillas-de-hombre">
                      Zapatillas de hombre
                    </option>
                    <option value="zapatillas-infantil">
                      Zapatillas infantil
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="nombre_producto">Titulo del producto</label>
                <input
                  className="form-control"
                  id="nombre_producto"
                  name="nombre_producto"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="descripcion">Descripción</label>
                <input
                  className="form-control"
                  id="descripcion"
                  name="descripcion"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="imagen_url">Dirección url de imagen</label>
                <input
                  className="form-control"
                  id="imagen_url"
                  name="imagen_url"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="precio">Precio</label>
                <input
                  className="form-control"
                  id="precio"
                  name="precio"
                  type="number"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="stock">Stock disponible</label>
                <input
                  className="form-control"
                  id="stock"
                  name="stock"
                  type="number"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <button className="btn btn-outline-primary" type="submit">
                  Agregar
                </button>
                <button
                  id="btnClear"
                  className="btn btn-outline-primary"
                  type="reset"
                >
                  Reiniciar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
