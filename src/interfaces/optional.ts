interface EducationUser {
  name: string;
  age: number;
  education?: Education; // 顺便复习下枚举
}

enum Education {
  Undergraduate = 'Undergraduate',
  Postgraduate = 'Postgraduate'
}

const educationUser: EducationUser = {
  name: 'CHARLES',
  age: 18
}

// Bad. Type '"Postgraduate"' is not assignable to type 'Education | undefined'.
// const userWithoutStandardEducation: EducationUser = {
//   name: 'CHARLES',
//   age: 18,
//   education: 'Postgraduate'
// }
