import React from 'react';
import DykkerDestinationer from './dynamic-elements/Destinationer';

const DykIVerdenen = () => {
    return (
        <section className="contain" id="dykIVerden">
            <div className="row bg-gray">
                <h3 className="bg-black text-white col-md-6">DYK UD I VERDEN</h3>
            </div>
            <DykkerDestinationer/>
            <div className="row">
                <a href="#" className="offset-md-3 col-md-6 text-center">SE FLERE DESTINATION OG MULIGHEDER HER!</a>
            </div>
        </section>
    )
}

export default DykIVerdenen
