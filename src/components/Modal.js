import React, { useContext } from 'react'
import { ProductContext } from '../Context'
import { Link } from 'react-router-dom'

const Modal = () => {
    const [modalOpen, ] = useContext(ProductContext).modalOpen
    const [modalProduct, ] = useContext(ProductContext).modalProduct
    const closeModal = useContext(ProductContext).closeModal
    const { img, title, price } = modalProduct
    const modalStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const modalStyleID = {
        background: 'white'
    }
    if (!modalOpen)
    return null
    else
    return (
        <div style={modalStyle}>
            <div className="container">
                <div className="row">
                    <div style={modalStyleID} id="modal" className="col-8 mx-auto text-center p-5 col-md-6">

                        <h5>Item added to cart</h5>

                        <img src={img} className="img-fluid" alt=""/>

                        <h5 style={{fontWeight: 'bolder'}}>{title}</h5>

                        <h5>Price: ${price}</h5>

                        <Link to="/productList">
                            <button className="btN mx-2 mt-2" onClick={() => closeModal()}>Continue Shopping</button>
                        </Link>

                        <Link to="/cart">
                            <button className="btN mt-2" onClick={() => closeModal()}>Check Out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
