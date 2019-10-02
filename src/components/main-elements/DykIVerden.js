import React from 'react';
import { NavLink } from 'react-router-dom';
import DykkerDestinationer from './dynamic-elements/Destinationer';

const DykIVerden = () => {
    return (
        <section className="contain" id="dykIVerden">
            <div className="row bg-gray">
                <h2 className="bg-black text-white col-md-6">DYK UD I VERDEN</h2>
            </div>
            <DykkerDestinationer/>
            <div className="row">
                <NavLink to="/dykkerrejser" className="nav-link offset-md-3 col-md-6 text-center">SE FLERE DESTINATION OG MULIGHEDER HER!</NavLink>
            </div>
        </section>
    )
}

export default DykIVerden;
