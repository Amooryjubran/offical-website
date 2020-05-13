import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import styled from 'styled-components';
import BackImage from '../../images/home.jpg';


export default function Header() {
    return (
        <HeroWrapper>
            <div className="inside-container">
                <div className="heroTexts">
                    <Bounce left duration={1}>
                        <h1>Taste Of Rome <span role="img" aria-label="pizza">🍕</span></h1>
                    </Bounce>
                    <Bounce right duration={1}>
                    <h1>making people happy</h1>
                    </Bounce>
                    
                </div>
                <div className="pizza" style={{marginLeft: '-590px'}}>

                <hr style={{color: 'white', width : '450px'}}/>
                <h1 style={{color: 'white', marginTop: '35px', marginBottom: '35px', fontSize: '25px', fontWeight: '400'}}>Your Italian homemade food is right here</h1>
                <button style={{backgroundColor: 'Transparent', height: '40px', width: '100px',
                backgroundRepeat: 'no-repeat', border: '2px solid white', cursor: 'pointer', color: 'white'}}>Book Now ></button>
                <button style={{backgroundColor: 'orange',border: 'none', color: 'black',
                 height: '40px', width: '100px', marginLeft: '20px', cursor: 'pointer'
                }}>See Menu ></button>
                </div>
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.header`
    min-height: 60vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${BackImage}) center/cover no-repeat;
    display: flex;
    align-items: center;
    margin-top: -90px;
    width: 100%;
    overflow: hidden;
    justify-content: center;
    

    .heroTexts {
        min-height: inherit;
        margin: 0 auto;
        display: flex;
        justify-content: left;
        flex-direction: column;
        align-items: left;
        /* opacity: 0.8; */
        
        margin-left: -600px;
        
    }

    .heroTexts h1{
        font-size: 18px;
        text-transform: uppercase;
        color: white;
        
        
        margin: 5px;
        padding: 5px;
        font-weight: 400;

    }

    @media screen and (min-width: 880px) {
        min-height: 100vh;
        .heroTexts h1 {
            font-size: 30px;
            
            
        }
    }
    @media screen and (max-width: 760px) {
        min-height: 100vh;
        .heroTexts h1 {
            margin-left: 650px;
        }
        .pizza hr, button{
            margin-left: 640px;
        }
    }
`;