import { useState } from 'react';
import { GetMyBuy } from './GetMyBuy';
import './MyBuy.css';

export const MyBuy = () => {
  const [codeBuy, setCodeBuy] = useState('');
  const [items, setitems] = useState(false);

  const checkEmptyCode = (e) => {
    setCodeBuy(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {items === false ? (
              <>
                <h5 className="text-center">
                  Pegá el id de compra generado anteriormente para ver la compra
                  que has realizado.
                </h5>
                <div className="d-flex justify-content-center">
                  <div className="col-6">
                    <input
                      type="text"
                      id="inputCode"
                      name="inputCode"
                      className="form-control"
                      onChange={checkEmptyCode}
                    />
                  </div>
                  <button
                    className="btn btnSearch"
                    disabled={codeBuy === ''}
                    onClick={() => setitems(true)}
                  >
                    Buscar
                  </button>
                </div>
              </>
            ) : (
              <GetMyBuy idCode={codeBuy} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
