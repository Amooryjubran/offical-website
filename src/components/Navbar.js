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

`;