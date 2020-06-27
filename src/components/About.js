import React, { useState, useEffect } from 'react'
import background1 from '../assets/84015MSH__MG_0205.jpg'
import background2 from '../assets/breakfastAndCoffee.jpg'
import background3 from '../assets/crispyFriedChicken.jpg'
import CEO from '../assets/IMG_20171204_080721.jpg'
import chefOne from '../assets/chef1.jpg'
import chefTwo from '../assets/chef2.jpg'
import chefThree from '../assets/chef3.jpg'


const Hero = () => {
    
    let [currentPic, setCurrentPic] = useState(0)
    const [arrayOfPictures, ] = useState([
        {text: `<h1>ABOUT US</h1>`,
        image: background1},

        {text: `<h1>ABOUT US</h1>`,
        image: background2},
        
        {text: `<h1>ABOUT US</h1>`,
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

            <div className="col-md-12  pt-5 left-hero animate__animated animate__zoomIn" style={style} id="left-hero">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div id="hero-text" className="hero-text">
                            
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
        <div className="row second-hero">
            <h6 >Coffee | Breakfast | Dessert</h6>
        </div>
        <div className="row wheat mt-4">
            <h1 className="col-md-12 text-center">A Word from the CEO</h1>
        </div>
        <div className="row mt-4">
            <div className="col-md-6 d-flex">
                <div className="left">
                    <img style={{width: '100px', borderRadius: '200px'}} className="img-fluid" src={CEO} alt="Ceo"/>
                </div>
                <div className="ml-3 right">
                    <h6 className="font-weight-bold">Adedara Bankole</h6>
                    <p>Chief Operating Officer</p>
                </div>
            </div>
            <div className="col-md-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi commodi, veniam omnis earum facere! Repudiandae, earum quidem. Ex tempore et, iure rerum aut voluptas numquam illum dolor qui placeat voluptatum reiciendis eum omnis distinctio quasi impedit? Perferendis perspiciatis in assumenda odit earum aliquam tempora, modi eius culpa.</div>
        </div>

        <section className="container mt-5">
        <div className="row mb-5">
            <div className="col-md-12 text-center">
                <h1><span className="left-border">Meet Our</span>  <span className="choco"> Chefs </span> </h1>
            </div>
        </div>

        <div className="row m-5">
            <div className="col-sm-12 col-md-4 mt-2">
                <div className="card">

                <div className="card-header p-0">
                    <img src={chefThree} alt="" className="img-fluid card-img-buttom"/>
                </div>
                
                <div className="card-body">
                    <p className="card-title font-weight-bold">Bankole Adedara</p>
                    <p>Principal Chef & CEO </p>
                    <div className="social d-flex">
                        <li><a href="www.facebook.com"><span className='fa fa-facebook'></span></a></li>
                        <li><a href="www.twitter.com"><span className='fa fa-twitter'></span></a></li>
                        <li><a href="www.snapchat.com"><span className='fa fa-snapchat'></span></a></li>
                        <li><a href="www.instagram.com"><span className='fa fa-instagram'></span></a></li>
                        <li><a href="www.linkedin.com"><span className='fa fa-linkedin'></span></a></li>
                    </div>
                </div>

            </div>
            </div>

            <div className="col-sm-12 col-md-4 mt-2">
                <div className="card">

                <div className="card-header p-0">
                    <img src={chefTwo} alt="" className="img-fluid card-img-buttom"/>
                </div>
                
                <div className="card-body">
                    <p className="card-title font-weight-bold">Olanipekun Kazeem</p>
                    <p>Chief Chef</p>
                    <div className="social d-flex">
                        <li><a href="www.facebook.com"><span className='fa fa-facebook'></span></a></li>
                        <li><a href="www.twitter.com"><span className='fa fa-twitter'></span></a></li>
                        <li><a href="www.snapchat.com"><span className='fa fa-snapchat'></span></a></li>
                        <li><a href="www.instagram.com"><span className='fa fa-instagram'></span></a></li>
                        <li><a href="www.linkedin.com"><span className='fa fa-linkedin'></span></a></li>
                    </div>
                </div>
            </div>
            </div>

            <div className="col-sm-12 col-md-4 mt-2">
                <div className="card">

                <div className="card-header p-0">
                        <img src={chefOne} alt="" className="img-fluid card-img-buttom"/>
                </div>
                
                <div className="card-body">
                    <p className="card-title font-weight-bold">Chidinma Uka</p>
                    <p>Chef</p>
                    <div className="social d-flex">
                        <li><a href="www.facebook.com"><span className='fa fa-facebook'></span></a></li>
                        <li><a href="www.twitter.com"><span className='fa fa-twitter'></span></a></li>
                        <li><a href="www.snapchat.com"><span className='fa fa-snapchat'></span></a></li>
                        <li><a href="www.instagram.com"><span className='fa fa-instagram'></span></a></li>
                        <li><a href="www.linkedin.com"><span className='fa fa-linkedin'></span></a></li>
                    </div>
                </div>

            </div>
            </div>
        </div>
    </section>
    </React.Fragment>
    )
}

export default Hero
