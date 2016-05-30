import React                   from 'react';
import { connect }             from 'react-redux';
import { bindActionCreators }  from 'redux';
import * as actions            from '../actions/SamplePageActions';
import { FormControl }           from 'react-bootstrap';

import styles from '../../sass/main.scss';

class SamplePage extends React.Component {
  constructor (props) {
    super(props);
    this.actions = bindActionCreators(actions, this.props.dispatch);
  }
  render () {
    const { inputValue } = this.props.sampleReducer;
    return (
      <div className={styles.mainApp}>
        <h3> Sample Page </h3>
        First app in HMR
        <br/>
        <FormControl
          type='text'
          value={inputValue}
          placeholder='Some placeholder'
          onChange={this.actions.onInputChange.bind(this)}
        />
        <div>
          Input: {inputValue}
        </div>
      </div>
    );
  }
}

export default connect( state => {
  return {
      sampleReducer: state.sampleReducer.toJS()
  };
})(SamplePage);
