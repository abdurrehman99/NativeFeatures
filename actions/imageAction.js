import {ADD_IMAGE} from './types';

export const addImage = item => {
  return {
    type: ADD_IMAGE,
    payload: item,
  };
};
