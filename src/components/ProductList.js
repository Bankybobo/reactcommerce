import React, { useContext } from 'react'
import Product from "./Product"
import {ProductContext} from '../Context'

const ProductList = () => {
    const [productsArray, ] = useContext(ProductContext).productsArray
    
    return (
        <div className="mt-5 row">
            {productsArray.map((item, index) => {
                return(
                <div key={item.id} className="m-2 p-2 m-auto col-md-4 col-sm-6">
                    <Product 
                    wholeItem={item}
                    inCart={item.inCart} 
                    img={item.img}
                    id={item.id}
                    title={item.title} 
                    price={'$' + item.price} />
                </div> 
                )
            })}
        </div>
    )
}

export default ProductList
