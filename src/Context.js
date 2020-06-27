import React, { useState, createContext } from 'react';
import { storeProducts, detailProduct } from './data';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [productsArray, setProductsArray] = useState(storeProducts);
    const [oneDetail, setOneDetail] = useState(detailProduct);
    const [cart, setCart] = useState([]);
    const [modalOpen, setModalOpen] = useState(false)
    const [modalProduct, setModalProduct] = useState(detailProduct)
    let [totalCash, setTotalCash] = useState(0)

    const gotoDetailsHandler = (item) => {
        setOneDetail(item);
    }
    const addToCartHandler = (id) => {
        productsArray.forEach(item => {
            if(item.id === id){
                item.inCart = true;
                item.count++;
                item.total = item.count * item.price
                setProductsArray([...productsArray]);
                cart.push(item);
                setCart([...cart]);
                setModalProduct(item)
                findTotalCash()
    }
        });
    }
    const openModal = id => {
        setModalOpen(true)
    }
    const closeModal = id => {
        setModalOpen(false) 
    }
    const increaseQuantity = item => {
        item.count++
        item.total = item.price * item.count
        setProductsArray([...productsArray]);
        findTotalCash()
    }
    const decreaseQuantity = item => {
        if(item.count > 1)
        item.count-- 
        item.total = item.price * item.count
        setProductsArray([...productsArray]);
        findTotalCash()
    }
    const removeItem = (item, index) => {
        item.inCart = false
        item.count = 0;
        cart.splice(index, 1)
        setCart([...cart])
        findTotalCash()
    }
    const findTotalCash = () => {
        let gh = 0
        for (let i = 0; i < cart.length; i++) {
            gh = gh + cart[i].total
        }
        setTotalCash(gh)
    }
    return (
            <ProductContext.Provider value={{
                productsArray: [productsArray, setProductsArray],
                oneDetail: [oneDetail, setOneDetail],
                cart: [cart, setCart],
                modalOpen: [modalOpen, setModalOpen],
                modalProduct: [modalProduct, setModalProduct],
                totalCash: [totalCash, setTotalCash],
                addToCartHandler,
                gotoDetailsHandler,
                openModal,
                closeModal,
                increaseQuantity,
                decreaseQuantity,
                removeItem,
            }}>
                {props.children}
            </ProductContext.Provider>
    )
}

