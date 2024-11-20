class Person {
  // constructor는 Class의 생성자 함수
  // 객체를 생성할때 호출
  // 객체 초기화 역할
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old.`);
  }
}

const person1 = new Person("John", 32);

person1.sayHello();

class Car {
  constructor(modelName, modelYear, type, price){
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }
  ppang(){
    console.log(`${this.modelName}: 빵!!`);
  }
}

const car1 = new Car("casper", "2024", "power", 2000);

car1.ppang();