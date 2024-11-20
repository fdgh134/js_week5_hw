/*
class Person {
  // constructor는 Class의 생성자 함수
  // 객체를 생성할때 호출
  // 객체 초기화 역할
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and i'm ${this.age} years old.`
    );
  }
}

const person1 = new Person("John", 32);

person1.sayHello();

class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }
  ppang() {
    console.log(`${this.modelName}: 빵!!`);
  }

  printModelYear() {
    console.log(`이 ${this.modelName}은(는) ${this.modelYear}년식 입니다.`);
  }
}

const car1 = new Car("casper", "2024", "power", 2000);

car1.ppang();
car1.printModelYear();

// Getters와 Setters
// 객체지향 프로그래밍 언어 -> G, S
// 클래스 --> 객체(인스턴스)
// 프로퍼티(constructor)
// new Class(a, b, c)

class Rectangle {
  constructor(height, width) {
    this._height = height;
    this._width = width;
    // getters와 setters 사용할때 this.로 접근하는 프로퍼티에 underscore _ 사용
  }

  // width를 위한 getter
  get width() {
    return this._width;
  }

  set width(value){
    if (value <= 0) {
      console.log("[error] 가로 길이는 0보다 커야합니다!");
      return;
    } else if (typeof value !== "number") {
      console.log("[error] 가로 길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this._width = value;
  }

  get height(){
    return this._height;
  }

  set height(value){
    if (value <= 0) {
      console.log("[error] 세로 길이는 0보다 커야합니다!");
      return;
    } else if (typeof value !== "number") {
      console.log("[error] 세로 길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this._height = value;
  }

  getArea() {
    const area = this._width * this._height;
    console.log(`넓이는 ${area} 입니다.`);
  }
}

const rec1 = new Rectangle(10, 20);
const rec2 = new Rectangle(15, 15);

rec1.getArea();
rec2.getArea();
*/

// 1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
// 다음 네개의 값이 필수로 입력돼야 합니다! 
//    (1) modelName 
//    (2) modelYear 
//    (3) type : 가솔린, 전기차, 디젤
//    (4) price 
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요. 
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성! 
// 3. 이후 자동차를 3개 정도 만들어주세요 (객체생성) 
// [추가 요구사항] 
// 1. modelName, modelYear, price, type 을 가져오는 메서드 
// 2. modelName, modelYear, price, type 을 세팅하는 메서드 
// 3. 만든 인스턴스를 통해서 마지막에 set 해서 get 하는로직까지
 
class Car {
  constructor(modelName, modelYear, type, price) {
    this._modelName = modelName;
    this._modelYear = modelYear;
    this._type = type;
    this._price = price;
  }

  get modelName(){
    return this._modelName;
  }

  set modelName(value){
    if (value.length <= 0){
      console.log("[error] 모델명이 입력되지 않았습니다.");
    } else if(typeof value !== "string") {
      console.log("[error] 입력된 모델명이 문자형이 아닙니다.");
      return;
    }
    this._modelName = value;
  }

  get modelYear(){
    return this._modelYear;
  }

  set modelYear(value){
    if (value.length !== 4){
      console.log("[error] 입력된 연도가 4자리가 아닙니다.");
    } else if(typeof value !== "string") {
      console.log("[error] 입력된 모델명이 문자형이 아닙니다.");
      return;
    }
    this._modelYear = value;
  }

  get type(){
    return this._type;
  }

  set type(value){
    if (value.length <= 0){
      console.log("[error] 타입이 입력되지 않았습니다.");
    } else if(value !== "가솔린" && value !== "디젤" && value !== "전기차") {
      console.log("[error] 입력된 타입이 잘못되었습니다.");
      return;
    }
    this._type = value;
  }

  get price(){
    return this._price;
  }

  set price(value){
    if (typeof value !== "number"){
      console.log("[error] 입력된 값이 숫자가 아닙니다.");
    } else if(value < "1000000") {
      console.log("[error] 가격은 100만원 보다 작을 수 없습니다.");
      return;
    }
    this._modelName = value;
  }

  makeNoise(){
    console.log(`${this._modelName} : 빵!!!`);
  }
  printYear(){
    console.log(`이 ${this._modelName}는 ${this._modelYear}년식 입니다.`);
  }
}

const car1 = new Car("casper", "2024", "가솔린", 2000);
const car2 = new Car("x1", "2012", "디젤", 4000);
const car3 = new Car("tesla", "2024", "전기차", 5000);

car1.makeNoise();
car1.printYear();
console.log(car1.modelName);