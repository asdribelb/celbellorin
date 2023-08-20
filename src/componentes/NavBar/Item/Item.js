import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, price, category, img, stock, description }) => {

    return (
    <section className='card-celular'>
        <div className="productos3">
            <div className='card_celular img'>
                <img src={img} alt={name} />
             
             <div>
            <h2 className="titulo"> {name} </h2>
            <p className="precio"> Precio: ${price} </p>
            <p className="stock"> stock disponible: {stock} </p>

            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='ver-mas'>Ver detalles</Link>
            </footer>
            </div>
        </div>
        </div>
        </section>
    )
}




export default Item















/*
 <article className="CardItem">
     <header className="Header">
         <h2 className="ItemHeader">
             {name}
         </h2>
     </header>
     <picture>
         <img src={img} alt={name} className="ItemImg" />
     </picture>
     <section>
         <p className="Info">
             Precio: ${price}
         </p>
         <p className="Info">
             stock disponible: {stock}
         </p>
     </section>

     <footer className='ItemFooter'>
         <Link to={`/item/${id}`} className='Option'>Ver detalles</Link>
     </footer>
 </article>
)
}
*/
