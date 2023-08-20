import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">

        {
            carrito.map((productos) => (
                <div key={productos.name}>
                    <br />
                    <h3>{productos.name}</h3>
                    <p>Precio unit: ${productos.price}</p>
                    <p>Precio total: ${productos.price * productos.cantidad}</p>
                    <p>Cant: {productos.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <br />
                <Link to="/checkout">Finalizar compra</Link>
                <br />
                <br />
            </> :
            <h2>El carrito está vacío</h2>
        }
        
    </div>
  )
}

export default Carrito
