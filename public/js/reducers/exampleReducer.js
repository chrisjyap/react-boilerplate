import Immutable              from 'immutable';
import Constants              from '../constants/ExampleConstants';

let initialState = {
  inputValue: 'Redux!'
};

export default (state = Immutable.fromJS(initialState), action) => {
  switch(action.type){
    case Constants.UPDATE_INPUT:
      return state.set('inputValue', action.value);
    default:
      return state;
  }
}
