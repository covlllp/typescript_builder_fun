import * as React from 'react';

import * as styles from './canvas.css';

interface CanvasProps {
  drawCanvas?(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ): void;
}

export class Canvas extends React.Component<CanvasProps, {}> {
  private canvas: React.RefObject<HTMLCanvasElement>;

  constructor(props: CanvasProps) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.drawCanvas();
  }

  componentDidUpdate() {
    this.drawCanvas();
  }

  private drawCanvas() {
    const canvas = this.canvas.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const { drawCanvas } = this.props;
    if (!drawCanvas) return;
    drawCanvas(canvas, context);
  }

  render() {
    return <canvas className={styles.canvas} ref={this.canvas} />;
  }
}
