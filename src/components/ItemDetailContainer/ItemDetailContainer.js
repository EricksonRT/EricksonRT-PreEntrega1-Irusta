import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Get_Items } from '../Get_Items/Get_Items';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Loading } from '../Loading/Loading';

export const ItemDetailContainer = () => {
  const [producto, Setproducto] = useState(0);
  const [loading, setLoading] = useState(true);
  // Otro hook para capturar los datos de las categorias por url
  const { idProducto } = useParams();
  useEffect(() => {
    if (idProducto) {
      // Si hay categoria, en vez de filtrar, lo busca directamente y devuelve un obj para pasarlo por prop, sino trae todo el catologo por defecto
      Get_Items()
        .then((productos) =>
          Setproducto(
            productos.find((productos) => productos.id === parseInt(idProducto))
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
              <ItemDetail
                id={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                stock={producto.stock}
                img={producto.img}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
