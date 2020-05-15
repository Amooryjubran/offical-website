import React from 'react';
import {Link} from 'react-router-dom'

export const Owner = (props) => {
    
    return (
        <div className="main-content">
            <div><Link className="back" to="/owners">Back</Link></div>
            <h2>{props.id}</h2>
            <div className="container" id="theowners">
                <div className="owner-profile-image" style={{ backgroundImage: "url(" + props.image + ")" }}></div>
                <h2>{props.name}</h2>
                <p>{props.details}</p>
            </div>
        </div>
    )
}

export default Owner;