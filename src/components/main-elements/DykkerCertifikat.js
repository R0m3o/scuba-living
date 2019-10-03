import React from 'react';
import { NavLink } from 'react-router-dom';
import PADI from '../../assets/images/static/padi.logo.png';

const DykkerCertifikat = ()=> {
    return (
        <section className="contain" id="dykkerCertifikat">
            <div className="row bg-gray">
                <h2 className="bg-black text-white col-md-6">PADI - DYKKERCERTIFIKAT</h2>
            </div>
            <article className="row border-black" aria-label="denne article handler om at tage et dykkercertifikat">
                <div className="col-md-6">
                    <p className="title">TAG ET INTERNATIONALT ANERKENDT DYKKERCERTIFIKAT</p>
                    <p>
                        Her finder du et stort udvlg af dykkerkurser lige fra begynder til professionel. 
                        Vi er et af Danmarks førende dykkercentre, som uddanner fra PADI organisationen. 
                        Når du vælger at tage et dykkercertifikat hos os, 
                        får du ikke kun et internationalt anerkendt dykkercertifikat til markedets bedste priser, 
                        du får også et dykkerkursus, hvor kvaliteten er i top.
                    </p>
                    <p>
                        Vi har kompetente instruktører på vores dykkerkurser.
                        Erfaring, tillid og sikkerhed er vigtigt, når du dykker med os, 
                        derfor står vi klar med et stort hold af kompetente instruktører.
                    </p>
                </div>
                <div className="offset-md-2 col-md-4">
                    <img src={PADI} alt="PADI logo" className="img"/>
                </div>
            </article>
            <div className="row">
                <NavLink to="/dykkerkurser" className="nav-link offset-md-3 col-md-6 text-center">SE ALLE KURSER OG CERTIFIKATER HER!</NavLink>
            </div>
        </section>
    )
}

export default DykkerCertifikat;
