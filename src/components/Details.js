import React, { useContext } from 'react'
import { ProductContext } from '../Context'
import { Link } from 'react-router-dom'


const Details = () => {
    const totalFont = {
        color: '#492100'
    }
    const smallFont = {
        fontSize: '12px'
    }
    const bigFont = {
        fontSize: '30px',
        fontweight: 'bold'
    }
    const [oneDetail, ] = useContext(ProductContext).oneDetail
    const {id, img, price, info, title, inCart} = oneDetail
    const addToCartHandler = useContext(ProductContext).addToCartHandler
    return (
        <div style={totalFont} className="container py-5">
        
            <div className="row">
                <div className="col-md-6 text-slanted text-blue my-5">
                    <img src={img} alt="Product"/>
                </div>

                <div className="col-md-6 text-slanted text-blue my-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>{title}</h2>
                            <hr style={{backgroundColor: 'lightgrey'}}/>
                            <p style={bigFont}>Price: ${price}</p>
                            <p style={smallFont} className="font-weight-light">Product ID: {id}</p>
                            <hr style={{backgroundColor: 'lightgrey'}}/>
                        </div>
                        <div className="col-md-12">
                            {info}
                        </div>
                        <Link to="/productList">
                        <button className="btN mt-3 ml-3">Back to Products</button>
                        </Link>
                        <button 
                        onClick={() => addToCartHandler(id, 'noIndex')} 
                        disabled={inCart?true: false} 
                        className="btN mt-3 ml-3"
                        >
                            {inCart? 'In Cart': 'Add To Cart'}
                        </button>
                    </div>
                </div>  
            </div>

        </div>
    )
}

export default Details
