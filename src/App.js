import './App.css';
import ItemListContainer from './componentes/NavBar/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/NavBar/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from "./context/CartContext";
import Carrito from "./componentes/NavBar/Carrito";
import Contacto from "./componentes/NavBar/Contacto"
import Checkout from "./componentes/NavBar/Checkout"


function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
