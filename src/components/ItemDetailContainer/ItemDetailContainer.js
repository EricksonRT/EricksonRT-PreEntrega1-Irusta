import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Loading } from '../Loading/Loading';

export const ItemDetailContainer = () => {
  const [producto, Setproducto] = useState(0);
  const [loading, setLoading] = useState(true);
  // Otro hook para capturar los datos de las categorias por url
  const { idProducto } = useParams();
  useEffect(() => {
    // Obtenemos un doc de firestore
    const db = getFirestore();
    if (idProducto) {
      // Si hay categoria, en vez de filtrar, lo busca directamente y devuelve un obj para pasarlo por prop, sino trae todo el catologo por defecto
      //Obtener un documento en particular
      const queryDoc = doc(db, 'productos', idProducto);
      getDoc(queryDoc)
        .then((resp) => Setproducto({ id: resp.id, ...resp.data() }))
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
                nombre={producto.nombre_producto}
                descripcion={producto.descripcion}
                stock={producto.stock}
                img_url={producto.imagen_url}
                precio={producto.precio}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
