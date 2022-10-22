import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Get_Items } from '../Get_Items/Get_Items';
import { Item } from '../Item/Item';
import { Loading } from '../Loading/Loading';

export const ItemDetailContainer = () => {
  const [producto, Setproducto] = useState(0);
  const [loading, setLoading] = useState(true);
  // Otro hook para capturar los datos de las categorias por url
  const { idProducto } = useParams();
  useEffect(() => {
    if (idProducto) {
      // Si hay categoria, filtra por seleccionado, sino trae todo el catologo por defecto
      Get_Items()
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
              <Loading />
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
