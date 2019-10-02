import React from 'react';
import ScubaLivingLogoSmall from '../../assets/images/static/scuba.living.logo.small.png';
import MainMenu from './navbar/MainMenu';

const Header = () => {
    return (
        <header className="contain">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <h1 className="col-md-3">
                            <img src={ScubaLivingLogoSmall} alt="logo for scuba living" className="img-fluid"/>
                        </h1>
                        <div className="offset-md-1 col-md-8">
                            <MainMenu/>
                        </div>
                    </div>
                </div>
                <div className="offset-md-1 col-md-3">
                    <div className="row">
                        <form className="col-md-8">
                            <input type="text" className="bg-gray border-gray"/>
                            <button type="submit" className="bg-light-gray border-gray">SØG</button>
                        </form>
                        <div className="offset-md-1 col-md-3">
                            <button id="logIn-btn">Log ind</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
