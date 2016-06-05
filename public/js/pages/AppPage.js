import React                   from 'react';

import styles from '../../sass/main.scss';

export default class extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <section className={styles.mainApp}>
        <h2> App Page </h2>
        First app in HMR
        <hr/>
        {this.props.children}
      </section>
    );
  }
}
