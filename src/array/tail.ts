export default function tail(array: Array<any>) {
  if (array == null) return [];
  const [, ...r] = array;
  return r;
}
