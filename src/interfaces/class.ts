// 类的接口定义
interface PersonInterface {
  readonly user: User;
  greeting(): void;
}

interface User {
  name: string;
  age: number;
}

// 类的实现
// 需要实现接口中的 user 属性和 greeting 方法
class Person implements PersonInterface {
  readonly user: User;

  constructor(user: User) {
    this.user = user;
  }

  greeting() {
    const { name, age } = this.user
    
    console.info(`Hi,${name},you are ${age} years old.`);
  }
}

const user: User = {
  name: 'CHARLES',
  age: 18
}

const person = new Person(user);
person.greeting();