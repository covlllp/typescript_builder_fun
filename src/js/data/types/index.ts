export const enum ActionTypes {
  SetAudioData = 'SetAudioData',
}

export interface SetAudioDataAction {
  type: ActionTypes.SetAudioData;
  payload: AudioData;
}

export type AudioData = number[];

export type Action = SetAudioDataAction;

export interface StoreShape {
  audioData: number[];
}
