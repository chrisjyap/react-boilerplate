import React                  from 'react';
import ReactDOM               from 'react-dom';
import { Provider }           from 'react-redux';
import {
        Router,
        Route,
        Redirect,
        hashHistory
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
import reducers               from '../reducers';

import AppPage                from '../pages/AppPage';
import SamplePage             from '../pages/SamplePage';

const allReducers = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Redirect from='/' to='sample' />
      <Route path='/' component={AppPage}>
        <Route path='sample' component={SamplePage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
);
