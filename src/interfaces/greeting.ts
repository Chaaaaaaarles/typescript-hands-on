/**
 * 用户信息接口
 */
interface User {
  name: string;
  age: number;
}

export function greeting(user: User) {
  console.info(`Hi,${user.name},you are ${user.age} years old.`);
}

// Good. Matched the parameters interface definitions.
greeting({
  name: 'XU',
  age: 18
});

// Bad. TS Error
// greeting('XU');
// greeting({
//   name: 'XU'
// });