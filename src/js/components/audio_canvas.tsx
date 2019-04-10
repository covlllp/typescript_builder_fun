import * as React from 'react';

import { Canvas } from 'js/components/canvas';
import { VizTypes } from 'js/data/types';
import * as Painter from 'js/lib/painter';

interface AudioCanvasProps {
  data: number[];
  width: number;
  height: number;
  vizType: VizTypes;
}

export class AudioCanvas extends React.Component<AudioCanvasProps, {}> {
  private drawCanvas = (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) => {
    const { data, width, height, vizType } = this.props;
    const canvasData = {
      width,
      height,
      canvas,
      context,
    };
    canvas.width = width;
    canvas.height = height;
    Painter.clearCanvas(canvasData);
    Painter.drawViz({ data: canvasData, wave: data, vizType });
  };

  render() {
    return <Canvas drawCanvas={this.drawCanvas} />;
  }
}
