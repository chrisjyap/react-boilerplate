import React                  from 'react';
import { Provider }           from 'react-redux';
import {
        createStore,
        applyMiddleware,
        combineReducers
}                             from 'redux';
import thunk                  from 'redux-thunk';
import reducers               from '../reducers';

import styles from '../../sass/main.scss';

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
    console.log('render', this.state.store);
    const { store } = this.state;
    return (
      <div className={styles.mainApp}>
        First app in HMR
      </div>
    )
  }
}
