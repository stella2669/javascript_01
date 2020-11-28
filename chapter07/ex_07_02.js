var varNum = 0;
var varSum = 0;

while(varNum < 10){
  console.log("varNum : " + varNum); // 0,1,2,3,4,5,6,7,8,9
  varSum += varNum;
  varNum++;
}
console.log("varSum : " + varSum); // 45

var varNumber = 1234;
do{
  console.log("varNumber : " + varNumber);
  varNumber = varNumber + 1;
}while(varNumber < 1250); // varNumber가 1250 미만일 동안 반복한다.