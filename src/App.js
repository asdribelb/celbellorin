import logo from './logo.svg';
import './App.css';
import ItemListContainer from './componentes/NavBar/ItemListContainer/ItemListContainer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'




function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
      </Router>
      <ItemListContainer greeting={'Bienvenidos a mi Tienda'} />
    </div>
  );
}

export default App;
