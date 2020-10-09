import React from 'react';

import Nav from '../nav';
import Footer from '../footer';

export default function Base({children}){
    return(
        <div className="container">
        <Nav/>
        {children}
        <Footer/>        
        </div>
    );

}