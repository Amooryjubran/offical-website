import React from 'react';
import Title from '../Title';

export default function Specials() {
    return (
        <div className="testimonial">
             <div className="inside-container">
                 <Title title="Specials" color="#989c9f" />
                 <div className="testimonial-center">
                     <div className="testimonial-texts">
                         <p>We provide a new service called Tase of Rome's Events, where you can set up an event for wherever you are when ever you want, and enjoy it with your friends and family.</p>
                     </div>
                     <div className="testimonial-icon">
                         <i className="fas fa-chevron-circle-down" style={{color: '#ffa347', opacity: '0.7'}}></i>
                     </div>
                     
                 </div>
                 <div className="testimonial-center" style={{marginTop: '50px'}}>
                     <div className="testimonial-texts">
                         <p>Our delievery services basically is based on the quality we have. We deliver our food as if it is cooked infornt of your door. Very hot, cheesy, and ready to be eaten.</p>
                     </div>
                     <div className="testimonial-icon">
                         <i className="fas fa-chevron-circle-down" style={{color: '#ffa347', opacity: '0.7'}}> </i>
                     </div>
                     
                 </div>
                 <div className="testimonial-center" style={{marginTop: '50px'}}>
                     <div className="testimonial-texts">
                         <p>The ingredients we have is built with love and passion as if it was made in your own home. We take care of every little detail when cooking to deliver the best italian food for you</p>
                     </div>
                     <div className="testimonial-icon">
                         <i className="fas fa-chevron-circle-down" style={{color: '#ffa347', opacity: '0.7'}}></i>
                     </div>
                     
                 </div>
             </div>
        </div>
    )
}
