import {
  ActionTypes,
  SetAudioDataAction,
  SetStepSizeAction,
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

export function setStepSize(stepSize: number): SetStepSizeAction {
  return {
    type: ActionTypes.SetStepSize,
    payload: stepSize,
  };
}
