import React from 'react';
import Title from '../Title';

export default function Tesimonials() {
    return (
        <div className="testimonial">
             <div className="inside-container">
                 <Title title="testimonials" color="#989c9f" />
                 <div className="testimonial-center">
                     <div className="testimonial-texts">
                         <p>There is no doubt why Tase Of Rome is the best Italian resturant on town. Always loved their food, specially their pizzas. Please do yourself a favour, and give it a try, you won't be disappointed.</p>
                     </div>
                     <div className="testimonial-icon">
                         <i className="fas fa-quote-right"></i>
                     </div>
                 </div>
             </div>
        </div>
    )
}
