import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from './components/header/header.component';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';



function App() {
  return (
    <div>
      <Header/>
      <Switch> 
      <Route path ='/shop/' component ={ShopPage}/>   
      <Route path='/' component={HomePage}/>
      
      </Switch>
      

    
    </div>
  );
}

export default App;
