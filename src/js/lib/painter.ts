import { FREQ_MAX } from 'js/constants';
import { RGBAToString } from 'js/lib/colors';

interface CanvasData {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
}

export function paintWavelength() {}

export function clearCanvas(data: CanvasData) {
  data.context.fillStyle = 'white';
  data.context.fillRect(0, 0, data.width, data.height);
}

export function drawLineWave(data: CanvasData, wave: number[]) {
  const halfWay = data.height / 2;
  const step = data.width / wave.length;

  let prevX = 0;
  let prevY = halfWay;
  const jump = 3;

  data.context.moveTo(0, halfWay);
  wave.forEach((point, index) => {
    if (index % jump) return;
    const y = (point / FREQ_MAX) * halfWay * (index % 2 ? 1 : -1) + halfWay;
    const x = step * index;
    data.context.strokeStyle = RGBAToString({
      red: 0,
      green: point * 0.5,
      blue: Math.random() * x * 0.5,
    });
    data.context.lineWidth = 2;
    data.context.beginPath();
    data.context.moveTo(prevX, prevY);
    data.context.lineTo(x, y);
    data.context.stroke();
    prevX = x;
    prevY = y;
  });
}
