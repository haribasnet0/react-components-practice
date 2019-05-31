import React from 'react';
import image from '../assets/images/header-image.png';

const Header = () =>{

    return (
        <header>
            <div className="container">
            <div className="top-image">
                <img src={image} alt="Header-img" />
            </div>
            <div className="top-text-portion">
                <div>
                    <i>POWERFULLY SIMPLE </i> <span> WITH A</span> <br />
                    <i> SQUEEKY CLEAN</i> <span>DESIGN</span>
                </div>
                <div>
                    <p>
                        Find out how you can offer quick and powerful <br />
                        solutions to your customers now!
                    </p>
                </div>
                <div>
                    <button type="button" className="button-header" name="button">LEARN MORE</button>
                </div>
            </div>
            <div className="the-blue-banner">
                <p>CREATE A <i> POWERFUL</i> SOLUTION NOW!</p>
                <button type="button" className="button-banner" name="button">
                    GET STARTED
                </button>
            </div>
        </div>
        </header>
    )
}

export default Header;