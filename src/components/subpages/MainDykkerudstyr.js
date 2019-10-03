import React from 'react';
import Udstyr from '../main-elements/dynamic-elements/Udstyr';

const MainDykkerudstyr = () => {
    return (
        <section className="contain" id="dykkerUdstyr">
            <div className="row bg-gray">
                <h2 className="bg-black text-white col-md-6">MEST POPULÆRE DYKKERUDSTYR</h2>
            </div>
            <Udstyr/>
        </section>
    )
}

export default MainDykkerudstyr;
