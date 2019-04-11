export const enum ActionTypes {
  SetAudioData = 'SetAudioData',
  SetVizType = 'SetVizType',
  SetStepSize = 'SetStepSize',
}

export const enum VizTypes {
  LineWave = 'LineWave',
  CircleWave = 'CircleWave',
  CircleDot = 'CircleDot',
  SymmetricCircles = 'SymmetricCircles',
  SymmetricDot = 'SymmetricDot',
}

export interface StoreShape {
  audioData: number[];
  vizType: VizTypes;
  stepSize: number;
}

export interface SetVizTypeAction {
  type: ActionTypes.SetVizType;
  payload: VizTypes;
}

export interface SetAudioDataAction {
  type: ActionTypes.SetAudioData;
  payload: number[];
}

export interface SetStepSizeAction {
  type: ActionTypes.SetStepSize;
  payload: number;
}

export type Action = SetAudioDataAction | SetVizTypeAction | SetStepSizeAction;
