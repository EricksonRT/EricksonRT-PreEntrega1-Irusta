import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/main.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartWidget } from './components/CartWidget/CartWidget';
import { NotFound404 } from './components/NotFound404/NotFound404';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Offers } from './components/Offers/Offers';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategoria" element={<ItemListContainer />} />
        <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/ofertas" element={<Offers detalle="Proximamente..." />} />
        <Route path="/cart" element={<CartWidget />} />
        <Route path="/404" element={<NotFound404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
