import * as React from 'react';

import { Canvas } from 'js/components/canvas';

import * as styles from './../../css/audio_canvas.css';

interface AudioCanvasProps {
  data: number[];
}

export class AudioCanvas extends React.Component<AudioCanvasProps, {}> {
  drawCanvas = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) => {
    console.log(canvas.width);
  };

  render() {
    return <Canvas className={styles.canvas} drawCanvas={this.drawCanvas} />;
  }
}
