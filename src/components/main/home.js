import React from 'react';
import Dykkerudstyr from '../main-elements/Dykkerudstyr';
import DykIVerden from '../main-elements/DykIVerden';
import DykkerCertifikat from '../main-elements/DykkerCertifikat';
import Banner from '../main-elements/Banner';

function home() {
    return (
        <main>
            <Banner/>
            <Dykkerudstyr/>
            <DykIVerden/>
            <DykkerCertifikat/>
        </main>
    )
}

export default home;
