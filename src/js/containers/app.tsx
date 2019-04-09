import * as React from 'react';
import { connect } from 'react-redux';

import { Audio } from 'js/components/audio';
import { setAudioData } from 'js/data/actions';

interface AppProps {
  setAudioData(data: number[]): void;
}

const App: React.SFC<AppProps> = props => (
  <Audio
    src="audio/gggggg.mp3"
    onDataChange={(data: number[]) => props.setAudioData(data)}
  />
);

const ConnectedApp = connect(
  null,
  { setAudioData },
)(App);

export { ConnectedApp as App };
