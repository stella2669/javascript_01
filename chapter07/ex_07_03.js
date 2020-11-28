var varResult = 0;
for(var i = 1; i < 10; i++){
  if((i % 2 == 0) || (i % 3 == 0)){ // 2와 3의 배수는 출력x
    continue; // 다시 반복문으로 돌아감. else 지나침
  }else{
    console.log("i : " + i); // 1,5,7
    varResult += i;
  }
}
console.log("varResult : " + varResult); // 13

var varNum = 0;
var varSum = 0;
while(varNum < 10){
  console.log("varNum : " + varNum); // 0,1,2,3,4,5
  varSum += varNum;
  varNum++;
  if(varSum > 20){
    console.log("varSum : " + varSum); // 15
    break; //반복문 종료(아예 밖으로 나감)
  }
}

for(var i = 0; true; i++){ // 조건문 true 이므로 무한반복
  console.log("i : " + i); // 0부터 51까지 출력됨.
  if(i > 50){ // i가 50을 초과할때 반복문 종료
    break;
  }
}