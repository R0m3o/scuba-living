import React from 'react';
import Dykkerudstyr from '../main-elements/Dykkerudstyr';
import DykIVerdenen from '../main-elements/DykIVerden';
import DykkerCertifikat from '../main-elements/DykkerCertifikat';
import Banner from '../main-elements/Banner';

function home() {
    return (
        <main>
            <Banner/>
            <Dykkerudstyr/>
            <DykIVerdenen/>
            <DykkerCertifikat/>
        </main>
    )
}

export default home;
