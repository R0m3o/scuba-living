import React from 'react';

const MainLogIn = () => {
    return (
        <main className="row banner-background-img">
            <div className="offset-md-4 col-md-4 bg-light-gray-trans">
                <form className="login-form">
                    <h3>Log på</h3>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Bruger kode"/>
                    <div className="d-flex justify-content-end">
                        <button type="reset" className="form-btn bg-blue text-white">Fortryd</button>
                        <button type="submit" className="form-btn bg-blue text-white">Log ind</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default MainLogIn;
