import React from 'react';
import Title from '../Title';


export default function AboutProduct() {
    return (
        <div className="aboutContact">
          <div className="inside-container">
              <Title title="contact us" color="grey" />
             <div className="aboutContact-center">

                 <div className="aboutContact-info">
                 <p><span><i className='fas fa-user'></i></span>Taste of Rome</p>

                    <p><span><i className='fas fa-phone-alt'></i></span>+1 647 677 9695</p>

                    <p><span><i className='fas fa-envelope'></i></span>tasteofrome@gmail.com</p>

                    <p><span><i className='fas fa-user'></i></span>1455 Boulevard, Montreal, QC H3G1M8

</p>
                 </div>

                 <div className="aboutContact-form">
                 <form >
                     <div className="inputs">
                         <label htmlFor="name">name</label><br/>
                         <input type="text"/>
                     </div>

                     <div className="inputs">
                         <label htmlFor="name">email</label><br/>
                         <input type="email"/>
                     </div>
                     <div className="textarea">
                         <label htmlFor="message">message</label>
                         <textarea name="" id="" cols="30" rows="5"></textarea>
                     </div>

                     <button type="button" className="btn">Submit</button>


                 </form>
             </div>
                 
             </div>

           
          </div>
        </div>
    )
}