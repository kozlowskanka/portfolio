import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Projects } from './components/views/Projects/Projects';
import { HomePage } from './components/views/HomePage/HomePage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/projects' component={Projects} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export {App};
