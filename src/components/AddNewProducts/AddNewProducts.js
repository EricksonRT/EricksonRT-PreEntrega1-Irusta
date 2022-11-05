import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Componente para agregar nuevos productos a la bd
export const AddNewProducts = () => {
  // react hook form para las validaciones
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => addProduct(data);
  const [okAdd, setOkAdd] = useState(false);
  // Objeto con los valores del producto
  const product = {};
  // Agrega el producto
  const addProduct = (data) => {
    product.categoria = data.category;
    product.descripcion = data.description;
    product.imagen_url = data.imagen_url;
    product.nombre_producto = data.name_product;
    product.precio = data.price;
    product.stock = data.stock;

    //Agrega el nuevo producto a firestore
    const db = getFirestore();
    const db_products = collection(db, 'productos');
    addDoc(db_products, product) //
      .then((resp) => setOkAdd(true))
      .catch((err) => err)
      .finally(() => document.querySelector('#form').reset());
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {okAdd === false ? (
            <>
              <div className="d-flex justify-content-center">
                <form id="form" className="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="col-lg-12">
                    <div className="form-control">
                      <label htmlFor="category">Tipo de producto</label>
                      <select
                        className="form-select"
                        id="category"
                        name="category"
                        defaultValue={'DEFAULT'}
                        {...register('category', { required: true })}
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
                    <label htmlFor="name_product">Titulo del producto</label>
                    <input
                      className="form-control"
                      id="name_product"
                      name="name_product"
                      type="text"
                      {...register('name_product', { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="description">Descripción</label>
                    <input
                      className="form-control"
                      id="description"
                      name="description"
                      type="text"
                      {...register('description', { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="imagen_url">Dirección url de imagen</label>
                    <input
                      className="form-control"
                      id="imagen_url"
                      name="imagen_url"
                      type="text"
                      {...register('imagen_url', { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="price">Precio</label>
                    <input
                      className="form-control"
                      id="price"
                      name="price"
                      type="number"
                      {...register('price', { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="stock">Stock disponible</label>
                    <input
                      className="form-control"
                      id="stock"
                      name="stock"
                      type="number"
                      {...register('stock', { required: true })}
                    />
                  </div>
                  <div className="mt-3 d-flex justify-content-center">
                    <button className="btn btn-outline-success" type="submit">
                      Agregar
                    </button>
                    <button
                      id="btnClear"
                      className="btn btn-outline-danger"
                      type="reset"
                    >
                      Limpiar campos
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <h2>Producto añadido</h2>
              <button onClick={setOkAdd(false)}>Agregar otro producto</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
