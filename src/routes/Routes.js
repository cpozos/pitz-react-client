import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from '../pages/LoginPage'
import MenuPage from '../pages/MenuPage'

function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route path="/" component={LoginPage} />
      <Route path="/menu" component={MenuPage} />
    </Switch>
   </BrowserRouter>
  );
}

export default App;
