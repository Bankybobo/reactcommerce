import React, {useContext, useEffect } from 'react'
import { ProductContext } from '../Context'

const Cart = () => {
    const [cart, ] = useContext(ProductContext).cart
    const increaseQuantity = useContext(ProductContext).increaseQuantity
    const decreaseQuantity = useContext(ProductContext).decreaseQuantity
    const removeItem = useContext(ProductContext).removeItem
    const [totalCash, ] = useContext(ProductContext).totalCash

    useEffect(() => {
        if(cart.length < 1)
        document.getElementById('total').innerHTML = '<h1>Your Shopping Cart is Empty</h1>'
    })
    
    return (
        <div className="mt-5 container">
            {cart.map((item, index) => {
                return (
                <div  key={index}>
                    <div className="d-flex cart-card m-2 py-2 px-5 ">
                        <div>
                            <img className="small-image img-fluid" src={item.img} alt={item.img}/>
                        </div>
                        <div className="beside-image">
                            <p className="small-text font-weight-bold">{item.title}</p>
                            <p className="small-text">Quantity: {item.count}</p>
                            <div className="d-flex">
                                <button className="small-text mr-4 btN" onClick={() => increaseQuantity(item)}>+</button>
                                <button className="small-text btN" onClick={() => decreaseQuantity(item)}>-</button>
                            </div>
                        </div>
                        <div className="ml-auto">
                            <button className="btN small-text" onClick={() => removeItem(item, index)}>x</button>
                            <p className=" small-text mt-2">Total Price: ${item.price * item.count}</p>
                        </div>
                    </div>
                </div>
                )
            })}   
            <div id="total" style={{backgroundColor: 'wheat', fontWeight: 'bolder'}} className="text-center pl-5 total ml-2">
                Amount Due: ${totalCash}
            </div>        
        </div>
    )
}

export default Cart
