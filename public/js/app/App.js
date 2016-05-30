import React                  from 'react';
import { Provider }           from 'react-redux';
import {
        createStore,
        applyMiddleware,
        combineReducers
}                             from 'redux';
import thunk                  from 'redux-thunk';
import reducers               from '../reducers';

import SamplePage             from '../pages/SamplePage';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    const allReducers = combineReducers(reducers);
    const store = createStore(
      allReducers,
      applyMiddleware(thunk)
    );
    this.setState({
      store
    });
  }

  render () {
    const { store } = this.state;
    return (
      <Provider store={store}>
        <SamplePage />
      </Provider>
    )
  }
}
