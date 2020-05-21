import React from 'react'
import {Link} from 'react-router-dom';
import {OwnersList} from '../Context/Data';
import Title from '../Title';


const Owners = (props) => {
    let owners = OwnersList.map((owner) => {
        return (
            
            <div className="owner-container" >
                <Link to={`/owners/${owner.url}`} >
                    <div className="owner-image"  style={{ backgroundImage:"url(" + owner.img_src + ")"  }}>
                        
                    </div>
                </Link>
                <h3 className="names"><span className="background-name">{owner.name}</span></h3>
            </div>
        )
    })
 
 
 
    return (
        <div className="main0owner" id="main0owner">
<div><Link className="back" to="/" >Back</Link></div>
                            <div className="inside-container" style={{backgroundColor: 'black', width: '200px', opacity: '0.7'}}>
                                <Title title="The Owners" color="white" />
                            </div>
        
       
        <div className="main-content" > 
        
            <h2 className="namesss">{props.title}</h2>
        <div className="container" id="theowners" >
            {owners}
            
        </div>
    </div>
        </div>
    )
}

export default Owners;