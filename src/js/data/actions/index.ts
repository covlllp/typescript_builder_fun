import {
  ActionTypes,
  SetAudioDataAction,
  SetVizTypeAction,
  VizTypes,
} from 'js/data/types';

export function setAudioData(data: number[]): SetAudioDataAction {
  return {
    type: ActionTypes.SetAudioData,
    payload: data,
  };
}

export function setVizType(vizType: VizTypes): SetVizTypeAction {
  return {
    type: ActionTypes.SetVizType,
    payload: vizType,
  };
}
