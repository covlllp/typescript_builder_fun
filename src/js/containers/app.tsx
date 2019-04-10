import * as React from 'react';
import { connect } from 'react-redux';

import { Audio } from 'js/components/audio';
import { AudioCanvas } from 'js/components/audio_canvas';
import { setAudioData } from 'js/data/actions';
import { getAudioData } from 'js/data/selectors';
import { StoreShape } from 'js/data/types';

import * as styles from './app.css';

interface AppProps {
  audioData: number[];
  setAudioData(data: number[]): void;
}

interface AppState {
  windowHeight: number;
  windowWidth: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }

  private setAudioData = (data: number[]) => {
    this.props.setAudioData(data);
  };
  render() {
    return (
      <div className={styles.app}>
        <Audio
          className={styles.audio}
          src="audio/gggggg.mp3"
          onDataChange={this.setAudioData}
        />
        <AudioCanvas
          className={styles.canvas}
          data={this.props.audioData}
          width={this.state.windowWidth}
          height={this.state.windowHeight}
        />
      </div>
    );
  }
}

const ConnectedApp = connect(
  (state: StoreShape) => ({
    audioData: getAudioData(state),
  }),
  { setAudioData },
)(App);

export { ConnectedApp as App };
