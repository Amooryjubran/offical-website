import React from 'react';

import Title from '../Title';

export default function ContactForm() {
    return (
        <section className="contact-form">
        <div className="inside-container">
            <Title title="contact" color="#e8f4dc" />
            <div className="contact-form-center">
          <form >
              <div className="form-inputs-texts">
                <div className="inputs">
                    <p><label htmlFor="name">FULL NAME</label></p>
                    <input type="text" className="name" name="" id=""/>
                    
                    <p><label htmlFor="email">EMAIL</label></p>
                    <input type="email" className="email" name="" id=""/>
              </div> 

              <div className="form-texts">
                  <p>Feel free to contact us with your orders, events, suggestions, recoomendations, and feednack. We are always open for them and will response to you withen 24 hours. Please right it down and send it to us. </p>
                  <p>Taste Of Rome</p>
                  <p>1455 Boulevard de Maisonneuve, Montreal, QC H3G1M8</p>
                  <p>(514) 123-4567</p>
              </div> 

              </div>
              <div className="form-area">
                  <p><label htmlFor="message">MESSAGE</label></p>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button type="button" className="btnForm">MESSAGE</button>
          </form>
            </div>
        </div>
    </section>
    )
}
