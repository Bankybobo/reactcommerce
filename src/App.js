import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Form from './components/Form'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart'
import About from './components/About'
import Modal from './components/Modal'
import Footer from './components/footer'
import { Component } from 'react'

export class App extends Component {
    render() {
    return (
            <div>
                <div id="mob" className="container mb-5">
                    <Nav />
                        <Switch>
                            <Route exact path="/" component={Hero} />
                            <Route path="/login" component={Form}/>
                            <Route exact path="/productlist" component={ProductList}/>
                            <Route path="/details" component={Details}/>
                            <Route path="/cart" component={Cart}/>
                            <Route path="/about" component={About}/>
                            <Route  component={Default}/>
                        </Switch>
                    <Modal />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App
