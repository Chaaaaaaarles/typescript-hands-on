interface ReadonlyNameUser {
  readonly name: string;
  age: number;
}

const readonlyNameUser: ReadonlyNameUser = {
  name: 'CHARLES',
  age: 18
}

// Bad. Cannot assign to 'name' because it is a read-only property.
// readonlyNameUser.name = 'X'