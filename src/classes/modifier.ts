class UserClass {
  // 私有属性
  // 仅类成员可访问
  private name: string;
  // 保护属性
  // 仅类成员和子类成员可访问
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 可通过访问器对外暴露 private 或 protected 成员
  get publicName() {
    return this.name;
  }

  // 公共属性
  greeting() {}
}

const charles = new UserClass('CHARLES', 18);

class StaffUserClass extends UserClass {
  staffGreeting() {
    // 可以访问到父类的 protected 属性
    console.info(this.age);
  }
}

// Good.
charles.greeting();

// Bad. Property 'name' is private and only accessible within class 'UserClass'
// charles.name;
// Property 'age' is protected and only accessible within class 'UserClass' and its subclasses
// charles.age;