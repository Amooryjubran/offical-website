import React from 'react';
import {OwnersList} from '../Context/Data';
import { Route } from 'react-router-dom';
import Title from '../Title';
import Owner from './Owner';
import Ownsers from './Ownsers';
import './owner.css'

const FilmsContainer = (props) =>  {
    let filmsUrl = OwnersList.map((film) => {
        return (
            
            <Route path={`/owners/${film.url}`} render={() => <Owner image={film.profile_img} name={film.name} details={film.description}  />} />
        )
    });
    return (
        <>

            
            <Route exact path="/owners" render={() => <Ownsers  />}/>
            
            {filmsUrl}
        </>
    )
};

export default FilmsContainer;