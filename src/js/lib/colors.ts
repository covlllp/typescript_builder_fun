interface RGBA {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
}

function RGBAToString(rgba: RGBA) {
  return `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha || 1})`;
}

export function getColor(point: number, index: number) {
  return RGBAToString({
    red: point,
    green: 100,
    blue: index * 0.25,
  });
}
