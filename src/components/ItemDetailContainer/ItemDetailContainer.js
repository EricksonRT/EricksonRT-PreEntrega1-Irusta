import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import { Item } from '../Item/Item';

export const ItemDetailContainer = () => {
  const [producto, Setproducto] = useState(0);
  const [loading, setLoading] = useState(true);
  // Otro hook para capturar los datos de las categorias por url
  const { idProducto } = useParams();
  useEffect(() => {
    if (idProducto) {
      // Si hay categoria, filtra por seleccionado, sino trae todo el catologo por defecto
      ItemList()
        .then((productos) =>
          Setproducto(
            productos.filter(
              (productos) => productos.id === parseInt(idProducto)
            )
          )
        )
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    } else {
      alert('error');
    }
  }, [idProducto]);
  return (
    <>
      {/* Componente del item */}
      <div className="container">
        <div className="col">
          <div className="row d-flex justify-content-center">
            {loading ? (
              <>
                {/* <div className="">CARGANDO.........</div> */}
                <div className="spinner-grow text-secondary" role="status">
                  <span className="visually-hidden"></span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                  <span className="visually-hidden"></span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                  <span className="visually-hidden"></span>
                </div>
              </>
            ) : (
              producto.map((producto) => (
                <Item
                  key={producto.id}
                  id={producto.id}
                  nombre={producto.nombre}
                  descripcion={producto.descripcion}
                  stock={producto.stock}
                  img={producto.img}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
