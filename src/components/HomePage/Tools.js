import React from 'react';
import Title from '../Title';
import {ProductConsumer} from '../Context/Context';

export default function Tools() {
    return (
      <ProductConsumer>
          {value=>{
              const {tools}=value;
              return(
        <section className="portfolio" >
        <div className="inside-container">
            <Title title="Pastas" color="#323232" />
    <div className="portfolio-center">
        {tools.map(tools=>{
            return(
                
                <div className="single-portfolio" key={tools.id} style={{backgroundImage: `url(${tools.img})` }}>
                    <div className="plus">
                        <p>{tools.plus}</p>
                        {/* <i className={portfolio.plus}></i> */}
                    </div>
                    
                </div>
                
            )
            
        })}
        
    </div>
        </div>
        </section>
              )
          }}
      </ProductConsumer>
    )
}