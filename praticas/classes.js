class Person {
  constructor(name, age, sex) {
    this._name = name;
    this._age = age;
    this._sex = sex;
  }

  set name(str) {
    this._name = str
  }

  get name() {
    return this._name
  }
}

const user = new Person('Lucas', 17, 'M');

console.log(user.name) // can be maked because the name get on line 12  
user.name = 'Pedro'; // can be maked because the name set on line 8

console.log(user.name)
