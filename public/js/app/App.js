import React from 'react';

import styles from '../../sass/main.scss';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className={styles.mainApp}>
        First app in HMR
      </div>
    )
  }
}
