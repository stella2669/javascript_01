function funName(x, y, z) { // 파라미터
  console.log("x : " + x);
  console.log("y : " + y);
  console.log("z : " + z);

  var result = x * y + z;

  return result;
}

var varResult = 0;
/*
  var varResult = 1;
  var varResult = 2;
  같은 변수로 선언해도 오류X_ 제일 마지막에 선언된 변수로 실행됨
*/
console.log("varResult : " + varResult);

varResult = funName(5, 13, 12); // 인자값
console.log("varResult : " + varResult);

varResult = funName(5, 13, 12, 3); // 해당없는 파라미터는 무시됨
console.log("varResult : " + varResult);

varResult = funName(5, 13); // z: undefined
console.log("varResult : " + varResult); // NaN