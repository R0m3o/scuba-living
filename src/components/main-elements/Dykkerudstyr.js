import React from 'react';
import Udstyr from './dynamic-elements/Udstyr';

const Dykkerudstyr= () => {
    return (
        <section className="contain" id="dykkerUdstyr">
            <div className="row bg-gray">
                <h3 className="bg-black text-white col-md-6">MEST POPULÆRE DYKKERUDSTYR</h3>
            </div>
            <Udstyr/>
            <div className="row">
                <a href="#" className="offset-md-3 col-md-6 text-center">SE MERE LÆKKERT UDSTYR HER!</a>
            </div>
        </section>
    )
}

export default Dykkerudstyr;
