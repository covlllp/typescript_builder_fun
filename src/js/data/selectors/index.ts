import { StoreShape } from 'js/data/types';

export function getAudioData(store: StoreShape): number[] {
  return store.audioData;
}
