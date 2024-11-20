// Class 상속
// class child extends parents

// 정적 메서드
// 유틸리티 함수, 정적 속성인 경우 인스턴스 간에
// 복제할 필요가없는 데이터(똑같은것을 공유해서 쓸 때)를 만들때 사용
class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(Calculator.add(1, 2)); // 3
console.log(Calculator.subtract(3, 2)); // 1


// 클로저

const x = 1;
/*
function outerFunc() {
  const x = 10;
  function innerFunc() {
    console.log(x); // 10
  }
  innerFunc();
}
outerFunc();


function outerFunc() { 
const x = 10; 
innerFunc(); // 1 
} 
function innerFunc() { 
console.log(x); // 1 
} 
outerFunc()
*/

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}
const innerFunc = outer();
innerFunc();
