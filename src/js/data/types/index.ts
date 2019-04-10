export const enum ActionTypes {
  SetAudioData = 'SetAudioData',
  SetVizType = 'SetVizType',
}

export interface SetAudioDataAction {
  type: ActionTypes.SetAudioData;
  payload: AudioData;
}

export type AudioData = number[];

export interface StoreShape {
  audioData: number[];
  vizType: VizTypes;
}

export const enum VizTypes {
  LineWave = 'LineWave',
  CircleWave = 'CircleWave',
  CircleDot = 'CircleDot',
  SymmetricCircles = 'SymmetricCircles',
}

export interface SetVizTypeAction {
  type: ActionTypes.SetVizType;
  payload: VizTypes;
}

export type Action = SetAudioDataAction | SetVizTypeAction;
