const products = [
    {
        id: '1',
        name: 'Hunter x Hunter',
        price: 2500,
        category: 'shonen',
        img: 'https://http2.mlstatic.com/D_NQ_NP_646000-MLA43847929164_102020-O.webp',
        stock: 20,
        descripcion: 'descripcion de HxH'
    },
    {id: '2', name: 'Naruto', price: 2300, category: 'Shonen', img:'https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/15925/9786075280202.jpg', stock:20, descripccion:'descripcion de Naruto'},
    {id: '3', name: 'One piece', price:3000, category:'Shonen', img: 'https://images-na.ssl-images-amazon.com/images/I/71pVXAk2veL._AC_UL600_SR600,600_.jpg', stock:15, descripccion: 'descripcion de one piece'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export async function getProductsByCategory(category) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredProducts = products.find(prod => prod.category === category);
        resolve(filteredProducts);
      }, 1000); // Simulamos un retardo de 1 segundo
    });
}

/*
export const getProductsByCategory = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === category))
        }, 500)
    })
}
*/
