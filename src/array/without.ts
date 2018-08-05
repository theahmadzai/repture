export default function without(array: Array<any>, value: any) {
  return array.filter(_ => _ !== value);
}
