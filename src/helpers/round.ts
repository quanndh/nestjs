export function round(x: number, scale = 100) {
  return Math.floor(x * scale) / scale;
}
