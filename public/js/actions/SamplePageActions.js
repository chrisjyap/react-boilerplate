import Constants              from '../constants/SampleConstants';

export const startInitialize = () => ({
  type: Constants.START_INITIALIZE
});

export const finishInitialize = () => ({
  type: Constants.FINISH_INITIALIZE
});
