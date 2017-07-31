import React                   from 'react';
import { connect }             from 'react-redux';
import { bindActionCreators }  from 'redux';
import * as actions            from '../actions/ExamplePageActions';
import { FormControl }         from 'react-bootstrap';

class ExamplePage extends React.Component {
  constructor (props) {
    super(props);
    this.actions = bindActionCreators(actions, this.props.dispatch);
    this.inputChange = this.actions.onInputChange.bind(this);
  }

  render () {
    const { inputValue } = this.props.exampleReducer;
    return (
      <div>
        <h3> Example </h3>
        <FormControl
          type='text'
          value={inputValue}
          placeholder='Some placeholder'
          onChange={this.onInputChange}
        />
        <div>
          Input: {inputValue}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  exampleReducer: state.exampleReducer
}))(ExamplePage);
