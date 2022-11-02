import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/main.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartPage } from './components/CartPage/CartPage';
import { NotFound404 } from './components/NotFound404/NotFound404';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Offers } from './components/Offers/Offers';
import CartContextProvider from './context/cartContext.js';
import { AddNewProducts } from './components/AddNewProducts/AddNewProducts';
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
          <Route
            path="/ofertas"
            element={<Offers detalle="Proximamente..." />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/404" element={<NotFound404 />} />
          <Route path="/newProducts" element={<AddNewProducts />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
