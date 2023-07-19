import logo from './logo.svg';
import './App.css';
import ItemListContainer from './componentes/NavBar/ItemListContainer/ItemListContainer';

import NavBar from './componentes/NavBar/NavBar';
import ItemCount from './componentes/NavBar/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/NavBar/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <div className="App">
        <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a mi Tienda'} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
