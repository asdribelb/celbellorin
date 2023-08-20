import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div className='container'>
            <div className="productos">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
        </div>
    )
}

export default ItemList