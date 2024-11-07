export function numberRange(start, end) {
  return Math.floor(
    Math.random() * (Math.floor(end) - Math.ceil(start) + 1) + Math.ceil(start)
  );
}
