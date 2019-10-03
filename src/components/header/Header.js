import React from 'react';
import { NavLink } from 'react-router-dom';
import ScubaLivingLogoSmall from '../../assets/images/static/scuba.living.logo.small.png';
import MainMenu from './navbar/MainMenu';

const Header = () => {
    return (
        <header className="contain">
            <div className="row">
                <div className="col-md-7">
                    <div className="row">
                        <h1 className="col-md-2">
                            <img src={ScubaLivingLogoSmall} alt="logo for scuba living" className="img-fluid"/>
                        </h1>
                        <div className="offset-md-1 col-md-9">
                            <MainMenu/>
                        </div>
                    </div>
                </div>
                <div className="offset-md-1 col-md-4">
                    <div className="row">
                        <form className="col-md-6">
                            <input type="text" className="bg-gray border-gray"/>
                            <button type="submit" className="bg-light-gray border-gray">SØG</button>
                        </form>
                        <div className="offset-md-1 col-md-5">
                            <NavLink to="/log_ind" id="logIn-btn" className="nav-link">Log ind</NavLink>
                            <NavLink to="/opret_bruger" id="logIn-btn" className="nav-link">Opret bruger</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
