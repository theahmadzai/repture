export function isString(arg: any) {
  return typeof arg === 'string' || arg instanceof String;
}

export function isBoolean(arg: any) {
  return typeof arg === 'boolean' || arg instanceof Boolean;
}

export function isNumber(arg: any) {
  return typeof arg === 'number' && isFinite(arg);
}

export function isArray(arg: any) {
  return typeof arg === 'object' && arg.constructor === Array;
}

export function isFunction(arg: any) {
  return typeof arg === 'function' || arg instanceof Function;
}

export function isObject(arg: any) {
  return typeof arg === 'object' && arg.constructor === Object;
}

export function isNull(arg: any) {
  return arg === null;
}

export function isUndefined(arg: any) {
  return typeof arg === 'undefined';
}
