export function createCounter(start = 0) {
  let count = start;
  return {
    increment: () => { count += 1; return count; },
    reset: () => { count = start; return count; },
    value: () => count
  };
}

export function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

export function memoize(fn) {
  const cache = new Map();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}