import { isEqual } from 'lodash';

import { ActionTypes, Action, StoreShape, VizTypes } from 'js/data/types';

const initialState: StoreShape = {
  audioData: [],
  vizType: VizTypes.SymmetricCircles,
  stepSize: 1,
};

export function reducer(state = initialState, action: Action): StoreShape {
  switch (action.type) {
    case ActionTypes.SetVizType: {
      return {
        ...state,
        vizType: action.payload,
      };
    }
    case ActionTypes.SetStepSize: {
      return {
        ...state,
        stepSize: action.payload,
      };
    }
    case ActionTypes.SetAudioData: {
      if (!isEqual(action.payload, state.audioData)) {
        return {
          ...state,
          audioData: action.payload,
        };
      }
    }
    default:
      return state;
  }
}
