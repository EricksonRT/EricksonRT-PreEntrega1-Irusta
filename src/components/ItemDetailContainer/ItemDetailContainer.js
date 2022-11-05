import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Loading } from '../Loading/Loading';

export const ItemDetailContainer = () => {
  const [product, Setproduct] = useState(0);
  const [loading, setLoading] = useState(true);
  // Otro hook para capturar los datos de las categorias por url
  const { idProducto } = useParams();
  useEffect(() => {
    // Obtenemos un doc de firestore
    const db = getFirestore();
    if (idProducto) {
      //Obtener un documento en particular
      const queryDoc = doc(db, 'productos', idProducto);
      getDoc(queryDoc)
        .then((resp) => Setproduct({ id: resp.id, ...resp.data() }))
        .catch((err) => err)
        .finally(() => {
          setLoading(false);
        });
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
                id={product.id}
                nombre={product.nombre_producto}
                descripcion={product.descripcion}
                stock={product.stock}
                img_url={product.imagen_url}
                precio={product.precio}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
