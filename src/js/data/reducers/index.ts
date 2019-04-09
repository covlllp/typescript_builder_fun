import { ActionTypes, Action, StoreShape } from 'js/data/types';

const initialState: StoreShape = {
  audioData: [],
};

export function reducer(state = initialState, action: Action): StoreShape {
  switch (action.type) {
    case ActionTypes.SetAudioData: {
      return {
        audioData: action.payload,
      };
    }
    default:
      return state;
  }
}
