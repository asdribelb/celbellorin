import IPHONE_11 from './componentes/NavBar/ImgCelulares/imagen3/IPHONE_11.jpg'
import iphone_12 from './componentes/NavBar/ImgCelulares/imagen3/iphone_12.jpg'
import iphone_13 from './componentes/NavBar/ImgCelulares/imagen3/iphone_13.jpg'
import iphone14 from './componentes/NavBar/ImgCelulares/imagen3/iphone14.jpg'

const products = [
    {
        id: '1',
        name: 'Iphone 11',
        price: 350000,
        category: 'celular',
        img: IPHONE_11,
        stock: 25,
        description: 'Apple iPhone 11 128 GB'
    },

    { id: '2', name: 'Iphone 12', price: 400000, category: 'celular', img:  iphone_12, stock: 20, description:'Apple iPhone 12 64 GB'},
    { id: '3', name: 'Iphone 13', price: 500000, category: 'celular', img: iphone_13 , stock: 15, description:'Apple iPhone 13 128 GB'},
    { id: '4', name: 'Iphone 14', price: 500000, category: 'celular', img: iphone14 , stock: 18, description:'Apple iPhone 14 128 GB'}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {                    
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
        })
}

