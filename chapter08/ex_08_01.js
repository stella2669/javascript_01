// 명시(선언)적 함수 생성
function funName(){
  console.log("명시(선언)적 함수의 기능을 실행합니다.")
};

// 익명 함수 생성_변수에 저장
var funAnonymous = function(){
  console.log("익명 함수의 기능을 실행합니다.")
};

// 함수 실행 방법
funName();
funAnonymous();

console.log("funName 함수 보기 : \n"+ funName);
console.log("funName 함수 실행 : \n"+ funName()); 
/*
함수 실행 후 console에 undefined 출력
 명시(선언)적 함수의 기능을 실행합니다.
 funName 함수 실행 : 
 undefined
*/

console.log("funAnonymous 함수 보기 : \n"+ funAnonymous);
console.log("funAnonymous 함수 실행 : \n"+ funAnonymous()); // undefined
/*
함수 실행 후 console에 undefined 출력
 익명 함수의 기능을 실행합니다.
 funAnonymous 함수 실행 : 
 undefined
*/