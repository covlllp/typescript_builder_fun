import * as React from 'react';
import { connect } from 'react-redux';

import { Audio } from 'js/components/audio';
import { AudioCanvas } from 'js/components/audio_canvas';
import { setAudioData } from 'js/data/actions';
import { getAudioData } from 'js/data/selectors';
import { StoreShape } from 'js/data/types';

interface AppProps {
  audioData: number[];
  setAudioData(data: number[]): void;
}

const App: React.SFC<AppProps> = props => (
  <div>
    <Audio
      src="audio/gggggg.mp3"
      onDataChange={(data: number[]) => props.setAudioData(data)}
    />
    <AudioCanvas data={props.audioData} />
  </div>
);

const ConnectedApp = connect(
  (state: StoreShape) => ({
    audioData: getAudioData(state),
  }),
  { setAudioData },
)(App);

export { ConnectedApp as App };
