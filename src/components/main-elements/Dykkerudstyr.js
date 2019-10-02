import React from 'react';
import { NavLink } from 'react-router-dom';
import Udstyr from './dynamic-elements/Udstyr';

const Dykkerudstyr= () => {
    return (
        <section className="contain" id="dykkerUdstyr">
            <div className="row bg-gray">
                <h2 className="bg-black text-white col-md-6">MEST POPULÆRE DYKKERUDSTYR</h2>
            </div>
            <Udstyr/>
            <div className="row">
                <NavLink to="/dykkerudstyr" className="nav-link offset-md-3 col-md-6 text-center">SE MERE LÆKKERT UDSTYR HER!</NavLink>
            </div>
        </section>
    )
}

export default Dykkerudstyr;
