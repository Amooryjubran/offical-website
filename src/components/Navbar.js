import React from 'react';
import logo from '../logo.png';
import styled from 'styled-components';
import BackImage from '../images/home.jpg';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context/Context';
export default function Navbar() {
    return (
        <ProductConsumer>

        {value=> {
            return(
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
                        {
                            value.links.map( links => {
                                return (
                                    <li key={links.id}><Link to={links.path}>{links.link}</Link></li> // for the links and key id in the data filke
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </NavbarWrapper>
            )
        }}
        </ProductConsumer>
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

    /* responsive */
    @media screen and (min-width: 870px) {
        .links {
            transition: all 0s ease-in-out !important;
        }
    }
    @media screen and (min-width: 880px) {
        .header-container {
            margin: 0 auto;
            width: 100%;
        }
        .btn {
            display: none;
        }
        nav{
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            max-width: 1180px;
            margin: 0 auto;
            position: relative;
        }
        .links {
            position: relative;
            transition: all 0s ease-in-out !important;
            display: flex;
            margin-right: 10px;
            justify-content: space-between;
            align-items: center;
            top: auto;
            background: transparent;
            width: auto;
            transform: translate(0);

        }
        .links li a{
            margin: 0 2px;
            padding: 10px;

        }
        .links li a:hover{
            margin: 0 2px;
            padding: 10px;
            border: 1px solid #049fe1;
            background: transparent;
        }
        .logoBtn {
            border-bottom: 0;

        }
        
    }
    @media screen and (min-width: 960px) {
        .logoBtn img {
            display: block;
            padding: 0 0px;

        }
    }


`;