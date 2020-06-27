import React, { useContext } from 'react'
import {ProductContext} from '../Context'
import { Link } from 'react-router-dom'

const Product = (props) => {
    const gotoDetailsHandler = useContext(ProductContext).gotoDetailsHandler
    const addToCartHandler = useContext(ProductContext).addToCartHandler   
    const openModal = useContext(ProductContext).openModal
    return (
        <div className="div " >
            <div className="card eachCard pt-3 mb-3">
                <div className="row no-gutters">
                    <div onClick={props.goto} className="col-md-4">
                        <Link to="/details">
                        <img src={props.img} className="ml-3 small-product card-img" alt="..."/>
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <p style={{fontWeight: 'bolder'}} className="card-title">{props.title}</p>

                            <p className="card-text">{props.price}</p>

                            <p className="card-text"><small className="text-muted">item available</small></p>

                            <button disabled={props.inCart} className="ml-2 mt-2 btN" onClick={() => {
                                addToCartHandler(props.id);
                                openModal(props.id)
                            }}>{props.inCart? 'In cart': <i className="fa fa-cart-plus"></i>}</button>

                            <Link to="/details"><button onClick={() => {gotoDetailsHandler(props.wholeItem)}} className="btN mt-2 ml-2"><i className="fa fa-info-circle"> </i></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
