/*
  javaScript 자료형에는 숫자, 문자, 불리언, 함수, 객체, undefined가 있다.
*/

var varNum = 123;
console.log("varNum : " + varNum);

var varStr = 'ABC';
console.log("varStr : " + varStr);

var varBoo = true;
console.log("varBoo : " + varBoo);

var varFun = function(){

};
console.log("varFun : " + varFun);

var varObj = {};
console.log("varObj : " + varObj); // [object Objcet]

var varUnd = undefined;
console.log("varUnd : " + varUnd); // undefined

/*
  JavaScript는 다른 프로그램언어에 비해 자료형에 대한 제약이 약하다.
*/

var varTemp = "123";
console.log("varTemp type : " + typeof(varTemp)); // string

varTemp = 123; // 다른 타입으로 넣을 수 있음
console.log("varTemp type : " + typeof(varTemp)); // number

/*
  자료형 변환
 */

 var varType = "123";
 console.log("varType type : " + typeof(varType));
 console.log("varType : " + (varType + 1000));

 varType = Number(varType);
 console.log("varType type : " + typeof(varType));
 console.log("varType : " + (varType + 1000));

 var varType = 123;
 varType = String(varType);
 console.log("varType type : " + typeof(varType));
 console.log("varType : " + (varType + 1000));
