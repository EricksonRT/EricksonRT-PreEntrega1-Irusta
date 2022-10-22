import { Get_Items } from '../Get_Items/Get_Items';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  // Otro hook para capturar los datos de las categorias por url
  const { idCategoria } = useParams();
  // console.log(idCategoria);
  useEffect(() => {
    if (idCategoria) {
      // Si hay categoria, filtra por seleccionado, sino trae todo el catologo por defecto
      Get_Items()
        .then((datos) =>
          setDatos(datos.filter((datos) => datos.categoria === idCategoria))
        )
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    } else {
      Get_Items()
        .then((datos) => setDatos(datos))
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [idCategoria]);
  return (
    <>
      {/* Componente del item */}
      <div className="container">
        <div className="col">
          <div className="row d-flex justify-content-center">
            {loading ? <Loading /> : <ItemList datos={datos} />}
          </div>
        </div>
      </div>
    </>
  );
};
