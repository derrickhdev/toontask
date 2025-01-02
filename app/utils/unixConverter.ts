export default function unixConverter(unix: number) {
  return new Date(unix * 1000);
}
