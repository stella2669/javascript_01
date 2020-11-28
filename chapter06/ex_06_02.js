var varNum = 100;

switch(varNum){
  case 200:
    console.log("varNum : 200");
    break;
  case 150:
    console.log("varNum : 100");
    break;
  default:
    console.log("varNum : " + varNum);
    break;
}

// break를 안해주면 모두 출력됨. 꼭 써주기!