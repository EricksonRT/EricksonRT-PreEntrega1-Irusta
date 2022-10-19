import { ItemList } from '../ItemList/ItemList';

import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';

export const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  // Otro hook para capturar los datos de las categorias por url
  const { idCategoria } = useParams();
  // console.log(idCategoria);
  useEffect(() => {
    if (idCategoria) {
      // Si hay categoria, filtra por seleccionado, sino trae todo el catologo por defecto
      ItemList()
        .then((datos) =>
          setDatos(datos.filter((datos) => datos.categoria === idCategoria))
        )
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    } else {
      ItemList()
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
            {loading ? (
              <Loading />
            ) : (
              datos.map((datos) => (
                <div className="card cardImg" key={datos.id}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-decoration-none text-body'
                        : 'text-decoration-none text-body'
                    }
                    to={'/item/' + datos.id}
                  >
                    <img
                      className="card-img-top"
                      src={datos.img}
                      alt={'img-avatar/' + datos.nombre}
                    />
                    <h2>{datos.nombre}</h2>
                  </NavLink>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
