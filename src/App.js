import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/main.css'
import { NavBar } from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {
  return (<>
    <NavBar />
    <ItemListContainer texto="Sitio en construcción..." descripcion="Proximamente, mas avances..." />
    </>
  );
}

export default App;
