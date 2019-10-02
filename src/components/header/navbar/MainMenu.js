import React from 'react';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
    return (
        <nav className="navbar navbar-expand-md" aria-label="denne menu er hoved menuen">
            <button className="navbar-toggler bg-black" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="fas fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ol className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link">HJEM</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/dykkerudstyr" className="nav-link">DYKKERUDSTYR</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/dykkerrejser" className="nav-link">DYKKERREJSER</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/dykkerkurser" className="nav-link">DYKKERKURSER</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/kontakt" className="nav-link">KONTAKT</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/om_os" className="nav-link">OM OS</NavLink>
                    </li>
                </ol>
            </div>
        </nav>
    )
}

export default MainMenu;
