import IPHONE_11 from './componentes/NavBar/ImgCelulares/imagen3/IPHONE_11.jpg'
import iphone_12 from './componentes/NavBar/ImgCelulares/imagen3/iphone_12.jpg'
import iphone_13 from './componentes/NavBar/ImgCelulares/imagen3/iphone_13.jpg'
import iphone14 from './componentes/NavBar/ImgCelulares/imagen3/iphone14.jpg'
import ipad1 from './componentes/NavBar/ImgCelulares/imagen3/ipad1.jpg'
import ipad2 from './componentes/NavBar/ImgCelulares/imagen3/ipad2.jpg'

 [
    {
        id: '1',
        name: 'Iphone 11',
        price: 350000,
        category: 'celulares',
        img: 'IPHONE_11',
        url: 'https://falabella.scene7.com/is/image/Falabella/14673304_1?wid=1500&hei=1500&qlt=70',
        stock: 30,
        description: 'Apple iPhone 11 128 GB'
    },

    { id: '2', 
    name: 'Iphone 12', 
    price: 400000, 
    category: 'celulares', 
    img: 'iphone_12',
    url: 'https://falabella.scene7.com/is/image/Falabella/14686767_1?wid=1500&hei=1500&qlt=70', 
    stock: 20, 
    description:'Apple iPhone 12 64 GB'
},

    { id: '3', 
    name: 'Iphone 13', 
    price: 500000, 
    category: 'celulares', 
    img: iphone_13, 
    url: 'https://falabella.scene7.com/is/image/Falabella/15643816_1?wid=1500&hei=1500&qlt=70',
    stock: 15, 
    description:'Apple iPhone 13 128 GB'
},

    { id: '4', 
    name: 'Iphone 14', 
    price: 500000, 
    category: 'celulares', 
    img: iphone14, 
    url: 'https://falabella.scene7.com/is/image/Falabella/16563319_1?wid=1500&hei=1500&qlt=70',
    stock: 18, 
    description:'Apple iPhone 14 128 GB'
},

    { id: '5', 
    name: 'Apple iPad', 
    price: 319990, 
    category: 'tablets', 
    img: ipad1,
    url: 'https://falabella.scene7.com/is/image/Falabella/15640034_1?wid=1500&hei=1500&qlt=70',
    stock: 10, 
    description:'Apple iPad 10,2" (Wi-Fi, 64GB) - gris espacial'
},

    { id: '6', 
    name: 'Apple iPad', 
    price: 319990, 
    category: 'tablets', 
    img: ipad2, 
    url: 'https://falabella.scene7.com/is/image/Falabella/15640155_1?wid=1500&hei=1500&qlt=70',
    stock: 10, 
    description:'Apple iPad 10,2" (Wi-Fi, 64GB) - color plata'
}
]

/*
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
*/
