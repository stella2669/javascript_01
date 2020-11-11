  /* var : 저장되는 데이터 타입을 가리지 않음 */    
  var variableName1;
  variableName1 = 100;
  alert("variableName1 : " + variableName1);

  var variableName2 = 200;
  variableName2 = 300;
  alert("variableName2 : " + variableName2);

  var varStr = "ABCDEF";
  console.log("varStr : " + varStr);

  var varBoo = false;
  console.log("varBoo : " + varBoo);
  
  var varFun = function(){
		
	};
  console.log("varFun : " + varFun); //function(){}
  
  var varObj = {}; // {}객체를 나타냄
  console.log("varObj : " + varObj); // [object Object]
  
  /* undefined : 선언만 하고 초기화하지 않은 것을 의미함 */
  var varUnd = undefined;
  console.log("varUnd : " + varUnd); // undefined

  var varUndefined;
  console.log("varUndefined : " + varUndefined); // undefined

  var varUndefined = 1;
  console.log("varUndefined : " + varUndefined); // 1

  /* typeof() */
  var varTemp;
  console.log("varTemp : " + varTemp); //undefined
  console.log("varTemp : " + typeof(varTemp)); //undefined
  
  var varTemp = 123456;
  console.log("varTemp : " + varTemp); //123456
  console.log("varTemp : " + typeof(varTemp)); // number

  varTemp = 123456.123456;
	console.log("varTemp : " + varTemp); // 123456.123456
  console.log("varTemp : " + typeof(varTemp)); //number
  
  varTemp = true;
	console.log("varTemp : " + varTemp); // true
  console.log("varTemp : " + typeof(varTemp)); // boolean

  varTemp = function(){
		
	};
	console.log("varTemp : " + varTemp); // function(){}
  console.log("varTemp : " + typeof(varTemp)); // function
  
  varTemp = {};
	console.log("varTemp : " + varTemp); // [object Object]
  console.log("varTemp : " + typeof(varTemp)); // object
  
  varTemp = undefined;
	console.log("varTemp : " + varTemp); // undefined
	console.log("varTemp : " + typeof(varTemp)); // undefined



