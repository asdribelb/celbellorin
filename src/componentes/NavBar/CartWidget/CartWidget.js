import cart from './imagen/carrito.png'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext';

const CarWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);
return (
<div>
<Link className="menu-link" to="/carrito">
            <img src={cart} alt="cart-widget"/>
            <span className="numerito">{cantidadEnCarrito()}</span>
        </Link>

</div>
)

}

export default CarWidget