// 泛型约束
// 限定泛型的合法取值范围
function pickAttribute<O, K extends keyof O>(object: O, key: K) {
  return object[key];
}

const object = {
  a: 1,
  b: 2
}

// Good. 'a' is a key of object
pickAttribute(object, 'a');

// Bad. Argument of type '"c"' is not assignable to parameter of type '"a" | "b"'
// pickAttribute(object, 'c');