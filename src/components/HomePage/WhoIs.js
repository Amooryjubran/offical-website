import React from 'react';
import Title from '../Title';

export default function WhoIs() {
    return (
        <div className="whoIs">
           <div className="inside-container">
              <Title title="Taste of Rome" color="#e8f4dc" /> 

              <div className="whoIs-center">
                  <div className="texts">
                      <p>Taste of Rome is a family resturant that was estabilished in 1960 in Toronto. It was founded by an italian family who imgirated to Canada in the 60s. The resturant has earned their reputation by providing great italin food with oraginc ingreidents. It's known best for the pizzas we have.</p>
                 </div>
                 <div className="text-icons">
                     <p className="socialmedia">You can follow us in our social media accounts.</p>
                     <div className="media-icons">
                         <a href="#"><i className="fab fa-twitter"></i></a>
                         <a href="#"><i className="fab fa-facebook-f"></i></a>
                         <a href="#"><i className="fab fa-google-plus-g"></i></a>
                         <a href="#"><i className="fab fa-youtube"></i></a>
                         <a href="#"><i className="fab fa-linkedin-in"></i></a>
                         <a href="#"><i className="fab fa-pinterest-p"></i></a>
                     </div>
                 </div>
             </div> 
            </div> 
        </div>
    )
}
