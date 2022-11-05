import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const GetMyBuy = (props) => {
  const { idCode } = props;
  const [ItemsBuys, setItemsBuys] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Obtenemos un doc de firestore
    const db = getFirestore();

    //Obtener un documento en particular
    const queryDoc = doc(db, 'orders', idCode);
    getDoc(queryDoc)
      .then((resp) => setItemsBuys({ id: resp.id, ...resp.data() }))
      .catch((err) => err)
      .finally(setLoading(false));
  }, [idCode]);
  return (
    <div className="d-flex justify-content-center">
      {loading !== false ? (
        <h1>verificando...</h1>
      ) : (
        <div className="col-8">
          <table className="table table-light">
            <thead>
              <tr>
                <th scope="col">Nombre de comprador</th>
                <th scope="col">Email</th>
                <th scope="col">Nro de celular</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          <table className="table table-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Productos</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          <p>Total: ${ItemsBuys.total}</p>
        </div>
      )}
    </div>
  );
};
