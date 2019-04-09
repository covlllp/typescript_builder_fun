import { ActionTypes, Action } from 'js/data/types';

export function setAudioData(data: number[]): Action {
  return {
    type: ActionTypes.SetAudioData,
    payload: data,
  };
}
