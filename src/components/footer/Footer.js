import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="row bg-black">
            <nav className="navbar offset-md-2 col-md-2 nav flex-column text-white" aria-label="denne menu handler om scuba living som en forretning">PRAKTISKE OPLYSNINGER
                <ol className="navbar-nav">
                    <li className="nav-item"><NavLink to="/om_os" className="nav-link">Om Scuba Living</NavLink></li>
                    <li className="nav-item"><NavLink to="/kontakt" className="nav-link">Kontakt</NavLink></li>
                    <li className="nav-item"><NavLink to="/handelsbetingelser" className="nav-link">Handelsbetingelser</NavLink></li>
                    <li className="nav-item"><NavLink to="/persondatapolitik" className="nav-link">Persondatapolitik</NavLink></li>
                    <li className="nav-item"><NavLink to="/åbningstider" className="nav-link">Åbningstider</NavLink></li>
                </ol>
            </nav>
            <nav className="navbar offset-md-1 col-md-2 nav flex-column text-white" aria-label="denne menu handler om diverse tjenester scuba living tilbyder">PRAKTISKE OPLYSNINGER
                <ol className="navbar-nav">
                    <li className="nav-item"><NavLink to="/hovedkatagorier" className="nav-link">Hovedkatagorier</NavLink></li>
                    <li className="nav-item"><NavLink to="/dykkerudstyr" className="nav-link">Dykkerudstyr</NavLink></li>
                    <li className="nav-item"><NavLink to="/dykkerrejser" className="nav-link">Dykkerrejser</NavLink></li>
                    <li className="nav-item"><NavLink to="/dykkerkurser" className="nav-link">Dykkerkurser</NavLink></li>
                    <li className="nav-item"><NavLink to="/service" className="nav-link">Service</NavLink></li>
                </ol>
            </nav>
            <nav className="navbar offset-md-1 col-md-2 nav flex-column text-white" aria-label="denne menu henviser til scuba livings sider på sociale medier">SOCIALE MEDIER - FØLG OS HER
                <ol className="navbar-nav">
                    <li className="nav-item"><NavLink to="/linkedin" className="nav-link">LinkedIn <span className="fab fa-linkedin"></span></NavLink></li>
                    <li className="nav-item"><NavLink to="/facebook" className="nav-link">Facebook <span className="fab fa-facebook-square"></span></NavLink></li>
                    <li className="nav-item"><NavLink to="/instagram" className="nav-link">Instagram <span className="fab fa-instagram"></span></NavLink></li>
                </ol>
            </nav>
        </footer>
    )
}

export default Footer;
