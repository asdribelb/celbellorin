import logo from './logo.svg';
import './App.css';
import ItemListContainer from './componentes/NavBar/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/NavBar/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
     <Route path='/' element={<ItemListContainer />}/>
     <Route path='/category/:categoryId' element={<ItemListContainer />}/>
     <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
