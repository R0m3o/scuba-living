import React from 'react';

const MainOpretBruger = () => {
    return (
        <main className="new-user">
            <div className="row banner-background-img">
                <div className="offset-md-3 col-md-6 bg-light-gray-trans">
                    <form className="new-user-form">
                        <h3>Opret bruger</h3>
                        <input type="text" placeholder="Fornavn" className="bruger-fornavn"/>
                        <input type="text" placeholder="Efternavn" className="bruger-efternavn"/>
                        <input type="email" placeholder="Email" className="bruger-email"/>
                        <input type="tel" placeholder="Telefon nr." className="bruger-telefon"/>
                        <input type="text" placeholder="By" className="bruger-by"/>
                        <input type="number" placeholder="Post nr." className="bruger-post-nr"/>
                        <input type="text" placeholder="Gade" className="bruger-gade"/>
                        <input type="number" placeholder="Hus nr." className="bruger-hus-nr"/>
                        <div className="row">
                            <p>Hvad er dit bekendtskab til dykning</p>
                            <select>
                                <option value="niveau-1">Ikke existerende</option>
                                <option value="niveau-2">ubetudelig</option>
                                <option value="niveau-3">god</option>
                                <option value="niveau-4">bedre</option>
                                <option value="niveau-5">Jeg er professionel dykker</option>
                            </select>
                        </div>
                        <input type="password" placeholder="Bruger kode" className="bruger-kode"/>
                        <input type="password" placeholder="Gentag bruger kode" className="bruger-kode"/>
                        <div className="d-flex justify-content-end">
                            <button type="reset" className="form-btn bg-blue text-white">Fortryd</button>
                            <button type="submit" className="form-btn bg-blue text-white">Log ind</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default MainOpretBruger;