import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/main/home';
import MainLogIn from './components/subpages/MainLogIn';
import MainOpretBruger from './components/subpages/MainOpretBruger';
import Footer from './components/footer/Footer';
import MainDykkerudstyr from './components/subpages/MainDykkerudstyr';
import MainDykkerrejser from './components/subpages/MainDykkerrejser';
import MainDykkerkurser from './components/subpages/MainDykkerkurser';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/log_ind' component={MainLogIn}/>
        <Route path='/opret_bruger' component={MainOpretBruger}/>
        <Route path='/dykkerudstyr' component={MainDykkerudstyr}/>
        <Route path='/dykkerrejser' component={MainDykkerrejser}/>
        <Route path='/dykkerkurser' component={MainDykkerkurser}/>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
