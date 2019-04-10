import * as React from 'react';

import { Canvas } from 'js/components/canvas';

import * as Painter from 'js/lib/painter';

interface AudioCanvasProps {
  className?: string;
  data: number[];
  width: number;
  height: number;
}

export class AudioCanvas extends React.Component<AudioCanvasProps, {}> {
  private drawCanvas = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) => {
    const { data, width, height } = this.props;
    const canvasData = {
      width,
      height,
      canvas,
      context,
    };
    canvas.width = width;
    canvas.height = height;
    Painter.clearCanvas(canvasData);
    Painter.drawLineWave(canvasData, data);
  };

  render() {
    return (
      <Canvas className={this.props.className} drawCanvas={this.drawCanvas} />
    );
  }
}
