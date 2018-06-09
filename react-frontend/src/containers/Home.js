import React, {Component} from 'react'

import {Carousel} from '../components/Carousel'

class Home extends Component{
    render(){
        return(
            <div>
                <Carousel/>
                <div className="row">
                    <div className="col" id="mf-moto">
                        <p>ONLY LOCAL SKATE SHOP IN GJ | EST. 2017</p>
                    </div>
                </div>
                <div id="mf-social" className="row text-center">
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        <a href="https://www.instagram.com/mutualfriends.gj/?hl=en">
                            <img src="/img/insta-logo.png" alt="Instagram Logo"/>
                            <p>@mutualfriends.gj</p>
                        </a>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        );
    }
}

export {Home}