import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../../sass/main.scss';

ReactDOM.render(
  <div className={styles.mainApp}>
    First app in HMR
  </div>,
  document.getElementById('content'));

if(module.hot) module.hot.accept();
