import React from 'react';
import DykIVerden from '../main-elements/DykIVerden';
import DykkerDestinationer from '../main-elements/dynamic-elements/Destinationer';

const MainDykkerrejser = () => {
    return (
        <main>
            <section className="contain" id="dykIVerden">
                <div className="row bg-gray">
                    <h2 className="bg-black text-white col-md-6">DYK UD I VERDEN</h2>
                </div>
                <DykkerDestinationer/>
            </section>
        </main>
    )
}

export default MainDykkerrejser;
