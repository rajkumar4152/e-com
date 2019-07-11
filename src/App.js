import React from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';

const Hatspage =() => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch> 
      <Route path ='/shop/hats' component ={Hatspage}/>   
      <Route path='/' component={Homepage}/>
      
      </Switch>
      

    
    </div>
  );
}

export default App;
