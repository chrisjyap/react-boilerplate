import React                   from 'react';

import styles from '../../sass/main.scss';

export default class extends React.Component {
  constructor (props) {
    super(props);
  }
  
  onLinkClick (url) {
    this.props.history.pushState(null, url);
  }

  render () {
    const { location } = this.props;
    return (
      <section className={styles.mainApp}>
        <h2> App Page </h2>
        First app in HMR
        <ul className='links'>
          <li
            className={(location.pathname=== '/sample') ? 'active' : null}
            onClick={this.onLinkClick.bind(this, 'sample')}
          >
            Sample
          </li>
          <li
            className={(location.pathname=== '/example') ? 'active' : null}
            onClick={this.onLinkClick.bind(this, 'example')}
          >
            Example
          </li>
        </ul>
        <hr/>
        <section className='app-container'>
          {this.props.children}
        </section>
      </section>
    );
  }
}
