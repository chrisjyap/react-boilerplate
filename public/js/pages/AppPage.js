import React from 'react';
import { Link } from 'react-router';
import styles from '../../sass/main.scss';

export default class AppPage extends React.Component {
  constructor (props) {
    super(props);
  }

  onClick() {
    this.context.router.push({}, 'example');
  }

  render () {
    const { location } = this.props;
    return (
      <section className={styles.mainApp}>
        <h2> App Page </h2>
        First app in HMR
        <div>
          <Link
            to='sample'
            activeClassName='active'
          >
            Sample
          </Link>&nbsp;
          <Link
            to='example'
            activeClassName='active'
          >
            Example
          </Link>
        </div>
        <div onClick={this.onClick.bind(this)}>Click me</div>
        <hr/>
        <section className='app-container'>
          {this.props.children}
        </section>
      </section>
    );
  }
}

AppPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};
