import React                  from 'react';
import ReactDOM               from 'react-dom';
import { Provider }           from 'react-redux';
import {
        Router,
        Route,
        Redirect,
        useRouterHistory
}                             from 'react-router';
import {
        createStore,
        applyMiddleware,
        combineReducers
}                             from 'redux';
import {
       syncHistoryWithStore,
       routerReducer
}                             from 'react-router-redux';
import thunk                  from 'redux-thunk';
import { createHashHistory }  from 'history';
import reducers               from '../reducers';
import AppPage                from '../pages/AppPage';
import SamplePage             from '../pages/SamplePage';
import ExamplePage            from '../pages/ExamplePage';

const allReducers = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);
const history = useRouterHistory(createHashHistory)({ queryKey: false });
const appHistory = syncHistoryWithStore(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory}>
      <Redirect from='/' to='sample' />
      <Route path='/' component={AppPage}>
        <Route path='sample' component={SamplePage}/>
        <Route path='example' component={ExamplePage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
);
