import React from 'react';
import Title from '../Title';
import BackPerson from '../../images/man.jpg';
import Bounce from 'react-reveal/Bounce';
import './biographyPage.css';




export default function BiographyPage() {
    return (
        <section className="biography">
            <div className="inside-container">
                <h4>Our Chef</h4>
                <h1>Valentino Vazzanae</h1>
                <div className="biography-links">
                 <li>
                    <a href="#">
                     <p className="p1">HOMEPAGE</p>
                     <p>BIOGRAPHY</p>
                    </a>
                        
                </li>

                <li>
                    <a href="#">
                     <p className="p1">PORTFOLIO</p>
                     <p>MY ART WORDS</p>
                    </a>
                        
                </li>

                <li>
                    <a href="#">
                     <p className="p1">HOMEPAGE</p>
                     <p>BE IN TOUCH</p>
                    </a>
                        
                </li>

                
                <li>
                    <a href="#">
                     <p ><i className="fas fa-search"></i></p>
                   
                    </a>
                        
                </li>
                </div>
                <div className="person">
                    <Bounce top duration={3000}>
                    <div className="personImg">
                        <img src={BackPerson} alt="img"/>
                    </div>
                    </Bounce>
                   
                    <div className="person-texts">
                        <Title title="Valentino Vazzanae" color="#fff" />
                        <Bounce right duration={2000} cascade>
                        <p>
                            Valentino has been a chef for 30 years, he's been making the real italian reciepes from his italian family to the resturant. He was nominated one of the best chefs in the country. Our customers are obessed with the pizzas he makes. He's also very friendly and passionate about cooking.
                        </p>
                        </Bounce>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
