import { FIND_SUITS } from '../actionType/suitAt';

export const addSuitsAc = (payload) => {
  return {
    type: FIND_SUITS,
    payload,
  }
};
