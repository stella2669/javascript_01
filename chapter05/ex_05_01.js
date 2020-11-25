// 크기를 지정하지 않은 배열 객체 생성
var varArr1 = new Array();

// 크기를 지정한 배열 객체 생성
var varArr2 = new Array(5);

// 배열 생성과 동시에 데이터 저장
var varArr3 = new Array(123, "ABC", true, function fun() { },
  {}, undefined); //undefined 출력안됨

// 배열 생성과 동시에 데이터 저장
var varArr4 = [123, "ABC", true, function fun() { },
  {}, undefined];

// var varArr5 = undefined;
var varArr5; /* 초기화를 안하면 undefined 출력됨 */

console.log("varArr1 : " + varArr1);
console.log("varArr2 : " + varArr2);
console.log("varArr3 : " + varArr3);
console.log("varArr4 : " + varArr4);
console.log("varArr5 : " + varArr5);
console.log("varArr4[0] : " + varArr4[0]);
console.log("varArr4[5] : " + varArr4[5]);