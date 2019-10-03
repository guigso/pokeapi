import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from 'pages/Main';
import Pokemon from 'pages/Pokemon';
import DefaultLayout from 'pages/__layouts/default';

export default function Routes() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={props => <DefaultLayout>{<Main {...props} />}</DefaultLayout>}
      />
      <Route
        path="/infos/:id"
        render={props => (
          <DefaultLayout>{<Pokemon {...props} />}</DefaultLayout>
        )}
      />
    </Switch>
  );
}
