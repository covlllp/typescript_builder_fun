import { StoreShape, VizTypes } from 'js/data/types';

export function getAudioData(store: StoreShape): number[] {
  return store.audioData;
}

export function getVizType(store: StoreShape): VizTypes {
  return store.vizType;
}
