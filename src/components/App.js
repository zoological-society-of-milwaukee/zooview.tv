import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header, Footer } from './blocks';
import {
  Error404,
  ExhibitDetailPage,
  Frontpage,
  PrivacyPolicyPage,
  TermsOfServicePage
} from './pages';

import '../media';

const App = (props) => {
  return (
    <>
      <Header {...props} />

      <Switch>
        <Route exact path="/" component={() => <Frontpage {...props} />} />
        <Route path="/exhibits/:slug" component={() => <ExhibitDetailPage {...props} />} />
        <Route path="/legal/terms-of-service" component={() => <TermsOfServicePage {...props} />} />
        <Route path="/legal/privacy-policy" component={() => <PrivacyPolicyPage {...props} />} />
        <Route component={() => <Error404 {...props} />} />
      </Switch>

      <Footer />
    </>
  );
}
export default App;