import React from 'react'
import {Link} from 'react-router-dom';
import {OwnersList} from '../Context/Data';


const Owners = (props) => {
    let owners = OwnersList.map((owner) => {
        return (
            
            <div className="owner-container">
                <Link to={`/owners/${owner.url}`} >
                    <div className="owner-image"  style={{ backgroundImage:"url(" + owner.img_src + ")"  }}>
                        
                    </div>
                </Link>
                <h3>{owner.name}</h3>
            </div>
        )
    })
 
 
 
    return (
        <div className="main-content"> 
        <div><Link className="back" to="/" >Back</Link></div>
            <h2>{props.title}</h2>
        <div className="container" id="theowners" >
            {owners}
            
        </div>
    </div>
    )
}

export default Owners;