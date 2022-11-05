import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { ItemList } from '../ItemList/ItemList';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
export const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  // Otro hook para capturar los datos de las categorias por url
  const { idCategory } = useParams();

  useEffect(() => {
    // Obtenemos un doc de firestore
    const db = getFirestore();
    // Si hay categoria, filtra por seleccionado, sino trae todo el catologo por defecto
    //usando un filtro, se pasa la db, la coleccion, y el id de la categoria
    const queryDoc = collection(db, 'productos');
    const queryFilter = idCategory
      ? query(queryDoc, where('categoria', '==', idCategory))
      : queryDoc;
    getDocs(queryFilter)
      .then((resp) => {
        setDatos(resp.docs.map((items) => ({ id: items.id, ...items.data() })));
      })
      .catch((err) => err)
      .finally(() => setLoading(false));
  }, [idCategory]);
  return (
    <>
      {/* Componente del item */}
      <div className="container">
        <div className="col">
          <div className="row d-flex justify-content-center">
            {loading ? <Loading /> : <ItemList key={datos.id} datos={datos} />}
          </div>
        </div>
      </div>
    </>
  );
};
