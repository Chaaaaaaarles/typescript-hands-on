export function whoami<T>(name: T) {
  return name;
}

// Good.
whoami<string>('CHARLES');

// 反向推导泛型 
const num: number = 0;
whoami(num); // T is number

// Bad.
// Argument of type 'number' is not assignable to parameter of type 'string'.
// whoami<string>(0);