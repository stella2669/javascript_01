for(var i = 0; i < 10; i++){
  console.log("i : " + i);
}

for(var i = 9; i >= 0; i--){
  console.log("i : " + i);
}

var varArr = [1,2,3,4,5];
for(var i = 0; i < varArr.length; i++){
  console.log("varArr["+i+"] : " + varArr[i]);
}

// varArr 배열안에 있는 데이터 모두 열람
for(var i in varArr){
  console.log("varArr["+i+"] : " + varArr[i]);
}