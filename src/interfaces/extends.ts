interface StudentUser extends User {
  grade: Grade;
}

interface StaffUser extends User {
  level: Level;
}

interface User {
  name: string;
  age: number;
}

// 年级
enum Grade {}

// 职位层级
enum Level {}