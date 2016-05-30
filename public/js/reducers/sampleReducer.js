import Immutable              from 'immutable';
import Constants              from '../constants/SampleConstants';

let initialState = {
  isInitializing : false
};

export default (state = Immutable.fromJS(initialState), action) => {
  switch(action.type){
    case Constants.START_INITIALIZE:
      return state.set('isInitializing', true);
    case Constants.FINISH_INITIALIZE:
      return state.set('isInitializing', false);
    default:
      return state;
  }
}
