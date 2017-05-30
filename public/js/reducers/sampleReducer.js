import Constants from '../constants/SampleConstants';

const initialState = {
  isInitializing : false,
  inputValue: 'Redux!'
};

export default (state = initialState, action) => {
  switch(action.type){
    case Constants.TOGGLE_INITIALIZE:
      var newState = {...state};
      newState['isInitializing'] = !newState.isInitializing;
      return newState;
    case Constants.UPDATE_INPUT:
      var newState = {...state};
      newState['inputValue'] = action.value;
      return newState;
    default:
      return state;
  }
}
