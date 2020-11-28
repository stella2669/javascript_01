var varArr;

function funName(){
  console.log("arguments length : " + arguments.length);
  return arguments; // 배열구조로 값을 리턴시킴.
}

varArr = funName(1,2,3,4,5,6,7); // arguments length : 7
console.log("varArr : " + varArr); //[object Arguments]
console.log("varArr.length : " + varArr.length); // varArr.length : 7

for(var i in varArr){
  console.log("varArr[" + i + "] : " + varArr[i]);
}
console.log("----------------------------");

varArr = funName("A","B","C","D")  // arguments length : 4
console.log("varArr : " + varArr); // [object Arguments]
console.log("varArr.length : " + varArr.length); // varArr.length : 4

for(var i in varArr){
  console.log("varArr[" + i + "] : " + varArr[i]);
}