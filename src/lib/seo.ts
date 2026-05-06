export function jsonLd<T>(value: T) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
