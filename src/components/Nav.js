import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import $ from '../public/jquery'


const Nav = () => {
        const [menuIcon, setMenuIcon] = useState('fa fa-bars')

        const toggleMobileMenuHandler = (e) => {
        const small = document.getElementById('small-nav')
        small.style.display === "block"? small.style.display = 'none' : small.style.display = 'block';
        small.style.display === "block"? setMenuIcon('fa fa-times') : setMenuIcon('fa fa-bars');
    }
    return (
        <div className="row nav">
            <div className="col-md-12 d-flex upperText" >
                <i onClick={toggleMobileMenuHandler}  id="icon" className={menuIcon}></i>
                <Link to="/"><p style={{color: 'wheat'}} className="ml-3" >SoftMeals</p></Link>
                <p className="ml-3"></p>
                <i style={{color: 'wheat'}} className="fa fa-search mt-1 mr-5 text-right"></i>
                <Link to="/cart"><i style={{color: 'wheat'}} className="fa fa-shopping-cart mt-1 text-right"></i></Link>
            </div>
            <div className="col-md-12  text-center">
                <div id="small-nav" className="animate__animated animate__slideInDown mobile-nav">
                
                    <Link to='/'><li onClick={toggleMobileMenuHandler} className="animate__animated animate__rubberBand"><i className="fa fa-home"></i> Home </li></Link>

                    <Link to="/ProductList"><li onClick={toggleMobileMenuHandler} className="animate__animated animate__rubberBand"><i className="fa fa-phone"></i> Meals</li></Link>

                    <Link to="/about"><li onClick={toggleMobileMenuHandler} className="animate__animated animate__rubberBand"><i className="fa fa-info-circle"></i> About</li></Link>

                    <Link to="/login"><li onClick={toggleMobileMenuHandler} className="animate__animated animate__rubberBand"><i className="fa fa-sign-in"></i> Sign in</li></Link>
                </div>
            </div>
            <div className="d-flex col-md-12 hey">
                    {/* <div style={{color: '#7c4c25'}} className="logo pt-3 mr-auto">CoffeeShop</div> */}
                    <div >
                        <ul className="inside-hey m-auto">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/ProductList"><li>Meals</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/login"><li>Sign in</li></Link>
                        <Link to="/"><li><i className="fa fa-search text-right"></i></li></Link>
                        <Link to="/cart"><li><i className="fa fa-shopping-cart text-right"></i></li></Link>
                        </ul>
                    </div>
                
            </div>
        </div>
    )
}

export default Nav
