import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from './routesProps';

export const Routes: React.FC = () => (
  <Switch>
    {routes.map(({ component, path, exact }) => (
      <Route exact={exact} component={component} path={path} />
    ))}
  </Switch>
);
