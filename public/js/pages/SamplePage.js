import React                   from 'react';
import { connect }             from 'react-redux';
import { bindActionCreators }  from 'redux';
import * as actions            from '../actions/SamplePageActions';
import { FormControl }         from 'react-bootstrap';

class SamplePage extends React.Component {
  constructor (props) {
    super(props);
    this.actions = bindActionCreators(actions, this.props.dispatch);
    this.onInputChange = this.actions.onInputChange.bind(this);
  }

  render () {
    const { inputValue } = this.props.sampleReducer;
    return (
      <section>
        <h3> Sample </h3>
        <FormControl
          type='text'
          value={inputValue}
          placeholder='Some placeholder...'
          onChange={this.onInputChange}
        />
        <div>
          Input: {inputValue}
        </div>
      </section>
    );
  }
}

export default connect(state => ({
  sampleReducer: state.sampleReducer
}))(SamplePage);
