import Constants from '../constants/ExampleConstants';
import cloneDeep from 'lodash/cloneDeep';

const initialState = {
  inputValue: 'Redux!'
};

export default (state = initialState, action) => {
  switch(action.type){
    case Constants.UPDATE_INPUT:
      var newState = cloneDeep(state);
      newState['inputValue'] = action.value;
      return newState;
    default:
      return state;
  }
}
