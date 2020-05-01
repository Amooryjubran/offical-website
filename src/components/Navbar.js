import React from 'react';
import logo from '../logo.png';
import styled from 'styled-components';
import BackImage from '../images/home.jpg';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <NavbarWrapper>
            <div className="header-container">
                <nav>
                    <div className="logoBtn">
                        <Link to="/"><img src={logo} alt=""/></Link>
                        <div className="btn">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <ul className="links">
                        <li><Link>Home</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Biography</Link></li>
                        <li><Link>Interios</Link></li>
                        <li><Link>Events</Link></li>
                        <li><Link>Contact</Link></li>
                        <li><Link>Inspirations</Link></li>
                    </ul>
                </nav>
            </div>
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.div`
    position: sticky;
    top: 0;
    z-index: 6;
    background: rgba(0,0,0,0.3);
    transition: all 0.5s ease-in-out;
    opacity: 0.9;
    .logoBtn img{
        display: block;
        padding: 0px;
        width: 180px;
        height: 50px;
    }
    .header-container {
        width: 100%;
        z-index: 5;

    }
    .bar{
        width: 35px;
        margin: 5px;
        padding: 2px;
        background: #fff;
    }
    .logoBtn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid grey;
        padding: 10px;

    }
    .links{
        transition: all 0.5s ease-in-out;
        position: fixed;
        top: 71px;
        bottom: 0px;
        left: 0px;
        right:0px;
        background: rgba(0,0,0,0.9);
        width: 400px;
        transform: translate(0%);

    }
    .links li a {
        color: #fff;
        display: block;
        text-transform: uppercase;
        padding: 10px;
        transition: all 0.5s ease-in-out;
        border: 1px transparent;
        border-bottom: 1px solid transparent;

    }
    .links li a:hover {
        color: #41e1b3;
        display: block;
        padding: 10px 25px;
        border-bottom: 1px solid #049fe1;
        background: rgba(0,0,0,0.1);

        
    }



`;