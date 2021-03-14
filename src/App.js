import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Projects } from './components/views/Projects/Projects';
import { HomePage } from './components/views/HomePage/HomePage';
import { About } from './components/views/About/About';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <MainLayout>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/about' component={About} />
            </Switch>
          </MainLayout>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
}

export {App};
