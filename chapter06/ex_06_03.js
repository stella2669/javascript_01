var varNum1 = "1234";
var varNum2 = "4321";

// 삼항 연산자 조건이 참일땐 앞부분, 거짓일땐 뒷부분 실행
var varResult = (varNum1 > varNum2) ? "varNum1 > varNum2" : "varNum1 < varNum2";
console.log("varResult : " + varResult);

var varNum = "50";
var varResult2 = (varNum < 50) ? "varNum<50" : "varNum>=50"
console.log("varResult2 : " + varResult2);
// 조건 거짓이므로 뒷부분 실행됨