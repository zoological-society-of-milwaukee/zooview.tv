import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Footer } from './blocks';
import {
  Error404,
  ExhibitDetailPage,
  Frontpage, 
} from './pages';

import '../media';

const App = () => {
  return (
    <>
    <BrowserRouter> 
      <Header /> 
      <Switch> 
        <Route path="/exhibits/:slug"   > <ExhibitDetailPage/>  </Route>   
        <Route exact path="/"  >          <Frontpage/>   </Route>  
        <Route  >                         <Error404/></Route>  
      </Switch> 
      <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;