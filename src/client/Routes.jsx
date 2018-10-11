import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/app/App';
import AsyncComponent from './AsyncComponent';

const reminders = () => import(/* webpackChunkName: "reminders" */ './components/reminders');
const reminder = () => import(/* webpackChunkName: "reminder" */ './components/reminder');

const Routes = () => (
  <App>
    <Switch>
      <Route path="/" exact component={() => <AsyncComponent moduleProvider={reminders} />} />
      <Route path="/reminder/:id" exact component={() => <AsyncComponent moduleProvider={reminder} />} />
      <Route render={() => <p>Not Found</p>} />
    </Switch>
  </App>
);

export default Routes;
