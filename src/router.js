import React from 'react';
import { Router } from 'dva/router';
import App from './routes/app';

export default function ({ history }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          cb(null, { component: require('./routes/app') });
        });
      }
    }
  ];

  return <Router history={history} routes={routes} />;
}
