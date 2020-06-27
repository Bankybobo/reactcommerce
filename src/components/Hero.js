import React, { useState, useEffect } from 'react'
import background1 from '../assets/arabic-coffee.jpg'
import background2 from '../assets/left-hero.jpg'
import background3 from '../assets/arabic-coffee.jpg'


const Hero = () => {
    
    let [currentPic, setCurrentPic] = useState(0)
    const [arrayOfPictures, ] = useState([
        {text: `<h6>Get the value for your money.  <br/> Freshly brewed hot coffee straight from the farms. Enjoy with any snack of choice</h6>
        <p>You can order online for your coffee breakfast</p`,
        image: background1},

        {text: `<h6>Enjoy good dessert daily.  <br/> Our Nescafe Coffee are ordered straight from Europe and brewed with quality, premium milk</h6>
        <p>Your can order online for your coffee breakfast</p>`,
        image: background2},
        
        {text: `<h6>Contact us <i className="fa fa-facebook">07063757140</i>  <br/> We are on facebook, twitter and instagram @coffeeShopNG. We do daily supplies of breakfast to offices</h6>
        <p>Your can order online for your coffee breakfast</p>`,
        image: background3},
    ])

    const [style, setStyle] = useState({
        backgroundImage:  `url(${arrayOfPictures[currentPic].image})`
    })

   
    useEffect(() => {
        document.getElementById('hero-text').innerHTML = arrayOfPictures[currentPic].text
        var timer = setInterval(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        currentPic = (currentPic + 1) % arrayOfPictures.length
        setCurrentPic(currentPic)
            setStyle({
            backgroundImage:  `Url(${arrayOfPictures[currentPic].image})`,
            transition: '1s'
        })
        if(document.getElementById('hero-text') === null)
        return
        document.getElementById('hero-text').innerHTML = arrayOfPictures[currentPic].text
    }, 2000);
        return () => {
            console.log('Jesus')
            clearInterval(timer)
        }
    }, [])    
    
    return (
    <React.Fragment>
        <div className="row hero center-padding mt-4 text-center">

            <div className="col-md-12  pt-5 left-hero animate__animated animate__bounceInDown" style={style} id="left-hero">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div id="hero-text" className="hero-text">
                            
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <button className="explore-btN mt-2">Explore</button>
            </div>
        </div>
        <div className="row second-hero">
            <h6 >Coffee | Breakfast | Dessert</h6>
        </div>
    </React.Fragment>
    )
}

export default Hero
