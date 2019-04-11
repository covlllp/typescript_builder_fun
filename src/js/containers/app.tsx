import * as React from 'react';
import { connect } from 'react-redux';

import { Audio } from 'js/components/audio';
import { AudioCanvas } from 'js/components/audio_canvas';
import { Slider } from 'js/components/slider';
import { VizSelector } from 'js/components/viz_selector';
import { AVAIL_VIZ_TYPES } from 'js/constants';
import { setAudioData, setVizType, setStepSize } from 'js/data/actions';
import { getAudioData, getVizType, getStepSize } from 'js/data/selectors';
import { StoreShape, VizTypes } from 'js/data/types';

import * as styles from './app.css';

interface AppProps {
  audioData: number[];
  setAudioData(data: number[]): void;
  setVizType(vizType: VizTypes): void;
  setStepSize(size: number): void;
  vizType: VizTypes;
  stepSize: number;
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
  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  private updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.audio}>
          <Audio
            src="audio/gggggg.mp3"
            onDataChange={this.props.setAudioData}
          />
        </div>
        <div className={styles.canvas}>
          <AudioCanvas
            data={this.props.audioData}
            width={this.state.windowWidth}
            height={this.state.windowHeight}
            vizType={this.props.vizType}
            stepSize={this.props.stepSize}
          />
        </div>
        <div className={styles.vizSelector}>
          <VizSelector
            vizTypes={AVAIL_VIZ_TYPES}
            selectedViz={this.props.vizType}
            onVizSelection={this.props.setVizType}
          />
        </div>
        <div className={styles.slider}>
          <Slider
            min={1}
            max={5}
            onChange={this.props.setStepSize}
            value={this.props.stepSize}
          />
        </div>
      </div>
    );
  }
}

const ConnectedApp = connect(
  (state: StoreShape) => ({
    audioData: getAudioData(state),
    vizType: getVizType(state),
    stepSize: getStepSize(state),
  }),
  { setAudioData, setVizType, setStepSize },
)(App);

export { ConnectedApp as App };
