import { useState } from 'react';
import '../ItemCount/itemCount.css';

export const ItemCount = (props) => {
  const { stockInicial, stockMaximo, onAdd } = props;
  const [cant, setCant] = useState(1);

  // Suma cantidad al dar +
  const addCount = () => {
    setCant(cant + 1);
  };
  // resta cantidad al dar -
  const delCount = () => {
    setCant(cant - 1);
  };
  // Agrega al carrito
  const AddToCart = () => {
    onAdd(cant);
  };
  return (
    <>
      <h5>Inicial: {stockInicial}</h5>
      <h5>Stock: {stockMaximo}</h5>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-ItemCount-css"
          disabled={stockInicial >= cant}
          onClick={delCount}
        >
          -
        </button>
        <h5 className="text-Stock">{cant}</h5>
        <button
          className="btn btn-ItemCount-css"
          disabled={cant >= stockMaximo}
          onClick={addCount}
        >
          +
        </button>
      </div>
      {/* Btn para hacer compra */}
      <div className="d-flex justify-content-center">
        <button id="btnBuy" className="btn" onClick={AddToCart}>
          Comprar
        </button>
      </div>
    </>
  );
};
