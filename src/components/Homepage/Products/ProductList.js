import React from 'react'
import Product from './Product'

const ProductList = () => {
    const image1 = require('../../../img/Products/2.jpg').default
    const image2 = require('../../../img/Products/3.jpg').default
    const image3 = require('../../../img/Products/5.jpg').default
    const image4 = require('../../../img/Products/7.jpg').default
    return (
        <header className="grid grid-1 grid-webview-products">
            <Product img={image1} />
            <Product img={image2} />
            <Product img={image3} />
            <Product img={image4} />
        </header>
    )
}

export default ProductList