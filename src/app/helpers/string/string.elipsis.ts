export function stringElipsis(value: string, characters = 5) {
  return value.slice(0, characters) + "..." + value.slice(-1 * characters);
}
