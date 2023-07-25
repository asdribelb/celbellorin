import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import ImgCelulares from '../ImgCelulares/ImgCelulares'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const handleAddToCart = (quantify) => {
        console.log('Cantidad agregada: ', quantify);
    };

    return (
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
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>

            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantify) => console.log('Cantidad agregada ', quantify)} />
            </footer>
        </article>
    )
}

export default ItemDetail

