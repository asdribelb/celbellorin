const products = [
    {
        id: '1',
        name: 'Iphone 11',
        price: 350000,
        category: 'celular',
        img: 'https://falabella.scene7.com/is/image/Falabella/14673309_1?wid=1500&hei=1500&qlt=70.png',
        stock: 25,
        description: 'Apple iPhone 11 128 GB'
    },

    { id: '2', name: 'Iphone 12', price: 400000, category: 'celular', img: 'https://falabella.scene7.com/is/image/Falabella/14686767_1?wid=1500&hei=1500&qlt=70.png'},
    { id: '3', name: 'Iphone 13', price: 500000, category: 'celular', img: 'https://falabella.scene7.com/is/image/Falabella/15643816_1?wid=1500&hei=1500&qlt=70.png'},
    { id: '4', name: 'Iphone 14', price: 500000, category: 'celular', img: 'https://falabella.scene7.com/is/image/Falabella/16563285_1?wid=1500&hei=1500&qlt=70.png'}

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
