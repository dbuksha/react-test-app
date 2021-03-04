import { ComponentClass, FunctionComponent, LazyExoticComponent } from 'react';

import { About } from '../pages/About';
import { Home } from '../pages/Home';

type RouteProp = {
  path: string;
  exact?: boolean;
  component: ComponentClass | FunctionComponent | LazyExoticComponent<any>;
};

export const routes: RouteProp[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];
