
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';


import Auth from 'auth'
import Dashboard from 'components/dashboard';
import Orders from 'components/orders';
import Catalog from 'components/catalog';
import CatalogForms from 'components/catalog/forms';
import Customer from 'components/customers';
import Banner from 'components/banner';
import Contact from 'components/contact';


class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path='/auth/:pageName' exact component={Auth} />
        <Route path='/' exact component={Auth} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/orders/:pageName' exact component={Orders} />
        <Route path='/catalog/:pageName' exact component={Catalog} />
        <Route path='/catalog/:pageName/:formType' exact component={CatalogForms} />
        <Route path='/customer/:pageName' exact component={Customer} />
        <Route path='/banner/:pageName' exact component={Banner} />
        <Route path='/contact/:pageName' exact component={Contact} />
      </Switch>
    );
  }
}

export default Routes;
