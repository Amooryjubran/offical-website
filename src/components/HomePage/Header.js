import React from 'react';
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';
import BackImage from '../../images/home.jpg';


export default function Header() {
    return (
        <HeroWrapper>
            <div className="inside-container">
                <div className="heroTexts">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </div>
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.header`
    min-height: 60px;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5), url(${BackImage})) center/cover no-repeat;


`;