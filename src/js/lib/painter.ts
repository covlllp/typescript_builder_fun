import { FREQ_MAX } from 'js/constants';
import { VizTypes } from 'js/data/types';
import { getColor } from 'js/lib/colors';

interface CanvasData {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  stepSize: number;
}

export function paintWavelength() {}

export function clearCanvas(data: CanvasData) {
  data.context.fillStyle = 'white';
  data.context.fillRect(0, 0, data.width, data.height);
}

function centerOrigin(data: CanvasData) {
  const centerX = data.width / 2;
  const centerY = data.height / 2;
  data.context.translate(centerX, centerY);
  data.context.rotate(Math.PI);
}

export function drawViz({
  data,
  wave,
  vizType,
}: {
  data: CanvasData;
  wave: number[];
  vizType: VizTypes;
}) {
  switch (vizType) {
    case VizTypes.SymmetricDot: {
      drawSymmetricDot({ data, wave });
      break;
    }
    case VizTypes.SymmetricCircles: {
      drawSymmetricCircles({ data, wave });
      break;
    }
    case VizTypes.CircleDot: {
      drawCircleDot({ data, wave });
      break;
    }
    case VizTypes.CircleWave: {
      drawCircleWave({ data, wave });
      break;
    }
    case VizTypes.LineWave: {
      drawLineWave({ data, wave });
      break;
    }
    default:
      drawLineWave({ data, wave });
  }
}

function drawSymmetricDot({
  data,
  wave,
}: {
  data: CanvasData;
  wave: number[];
}) {
  centerOrigin(data);
  const minDimension = Math.min(data.width, data.height) / 2;
  const halfWay = Math.floor(wave.length / 2);
  const rotationAngle = (2 * Math.PI) / wave.length;

  function drawViz(direction: number) {
    wave.forEach((point, index) => {
      if (index === halfWay) {
        data.context.rotate(Math.PI);
      }
      const length = (point / FREQ_MAX) * minDimension;
      data.context.rotate(rotationAngle * direction);
      data.context.fillStyle = getColor(point, index);
      data.context.fillRect(0, length, 5, 5);
    });
  }
  drawViz(1);
  data.context.rotate(Math.PI);
  drawViz(-1);
}

function drawSymmetricCircles({
  data,
  wave,
}: {
  data: CanvasData;
  wave: number[];
}) {
  centerOrigin(data);
  const minDimension = Math.min(data.width, data.height) / 2;
  const breaks = data.stepSize;
  const breakIndex = Math.floor(wave.length / breaks);
  const rotationAngle = (breaks * Math.PI) / wave.length;

  function drawViz(direction: number) {
    wave.forEach((point, index) => {
      if (index !== 0 && !(index % breakIndex)) {
        data.context.rotate(Math.PI);
      }
      const length = (point / FREQ_MAX) * minDimension;
      data.context.strokeStyle = getColor(point, index);
      data.context.lineWidth = 3;
      data.context.rotate(rotationAngle * direction);
      data.context.beginPath();
      data.context.moveTo(0, 0);
      data.context.lineTo(0, length);
      data.context.stroke();
    });
  }
  drawViz(1);
  if (breaks == 1 || !(breaks % 2)) {
    data.context.rotate(Math.PI);
  }
  drawViz(-1);
}

function drawCircleDot({ data, wave }: { data: CanvasData; wave: number[] }) {
  centerOrigin(data);
  const minDimension = Math.min(data.width, data.height) / 2;
  const rotationAngle = (2 * Math.PI) / wave.length;

  wave.forEach((point, index) => {
    const length = (point / FREQ_MAX) * minDimension;
    data.context.rotate(rotationAngle * 2);
    data.context.fillStyle = getColor(point, index);
    data.context.fillRect(0, length, data.stepSize, data.stepSize);
  });
}

function drawCircleWave({ data, wave }: { data: CanvasData; wave: number[] }) {
  centerOrigin(data);
  const minDimension = Math.min(data.width, data.height) / 2;
  const rotationAngle = (4 * Math.PI) / wave.length;

  wave.forEach((point, index) => {
    const length = (point / FREQ_MAX) * minDimension;
    data.context.strokeStyle = getColor(point, index);
    data.context.lineWidth = data.stepSize;
    data.context.rotate(rotationAngle);
    data.context.beginPath();
    data.context.moveTo(0, 0);
    data.context.lineTo(0, length);
    data.context.stroke();
  });
}

function drawLineWave({ data, wave }: { data: CanvasData; wave: number[] }) {
  const halfWay = data.height / 2;
  const step = data.width / wave.length;

  let prevX = 0;
  let prevY = halfWay;

  data.context.moveTo(0, halfWay);
  wave.forEach((point, index) => {
    if (index % data.stepSize) return;
    const y = (point / FREQ_MAX) * halfWay * (index % 2 ? 1 : -1) + halfWay;
    const x = step * index;
    data.context.strokeStyle = getColor(point, index);
    data.context.lineWidth = 2;
    data.context.beginPath();
    data.context.moveTo(prevX, prevY);
    data.context.lineTo(x, y);
    data.context.stroke();
    prevX = x;
    prevY = y;
  });
}
