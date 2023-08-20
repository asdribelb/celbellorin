import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../../firebase/config"

const ItemDetailContainer = () => {
    const [item, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {

        const docRef = doc(db, "articulos", itemId);
        getDoc(docRef)
            .then((resp) => {
                setProduct(
                    { ...resp.data(), itemId: resp.itemId }
                );
            })

    }, [itemId])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer