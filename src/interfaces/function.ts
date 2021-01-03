interface User {
  name: string;
  age: number;
}

// 函数的接口定义
interface Greeting {
  (user: User): void;
}

// 也可以用 type 来定义函数的类型
// type Greeting = (user: User) => void;

// 函数实现
const greeting: Greeting = (user: User) => {}
