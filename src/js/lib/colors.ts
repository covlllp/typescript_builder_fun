interface RGBA {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
}

export function RGBAToString(rgba: RGBA) {
  return `rgba(${rgba.red}, ${rgba.green}, ${rgba.blue}, ${rgba.alpha || 1})`;
}
