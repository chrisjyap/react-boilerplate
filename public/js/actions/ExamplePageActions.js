import Constants              from '../constants/ExampleConstants';

export const onInputChange = (e) => ({
  type: Constants.UPDATE_INPUT,
  value: e.target.value
});
