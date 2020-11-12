var temp1 = 100;
var temp2 = 200;
var temp3 = temp1 + temp2;
console.log("temp3 : " + temp3); // 300

temp2 = 1000;
temp3 = temp1 + temp2;
console.log("temp3 : " + temp3); // 1100

var varFirstNum = 10;
var varSecondNum = 4;
var varResult = 0;

var varResult = varFirstNum + varSecondNum;
console.log("varResult : " + varResult);

varResult = varFirstNum - varSecondNum;
console.log("varResult : " + varResult);

varResult = varFirstNum * varSecondNum;
console.log("varResult : " + varResult);

varResult = varFirstNum / varSecondNum;
console.log("varResult : " + varResult);

varResult = varFirstNum % varSecondNum;
console.log("varResult : " + varResult);

// 전위연산자 & 후위연산자
var varIncrease = 10;
var varDecrease = 10;

varIncrease = ++varIncrease;
varDecrease = --varDecrease;

console.log("varIncrease : " + varIncrease); /* 11 */
console.log("varDecrease : " + varDecrease); /* 9 */

var varIncrease2 = varIncrease++; /*후위 연산자 */ /*연산 후 자기 자신한테 넣으면 적용 안됨*/
var varDecrease2 = varDecrease--;

console.log("varIncrease : " + varIncrease2); /* 11 */
console.log("varDecrease : " + varDecrease2); /* 9 */
console.log("varIncrease : " + varIncrease); /* 12 */
console.log("varDecrease : " + varDecrease); /* 8 */

// 부등호
var varNum = 10;
console.log(varNum > 11);
console.log(varNum < 11);
console.log(varNum >= 11);
console.log(varNum <= 11);
console.log(varNum == 11);
console.log(varNum != 11);

// && || 연산
var varLogic1 = true;
var varLogic2 = false;
console.log(varLogic1 && varLogic2); //false
console.log(varLogic1 || varLogic2); //true

varLogic1 = true;
varLogic2 = true;
console.log(varLogic1 && varLogic2); //true
console.log(varLogic1 || varLogic2); //true

varLogic1 = false;
varLogic2 = false;
console.log(varLogic1 && varLogic2); //false
console.log(varLogic1 || varLogic2); //false


var varComplex = 100;
varComplex += 3;
console.log("varComplex : " + varComplex); //103

varComplex -= 3;
console.log("varComplex : " + varComplex); //100

varComplex /= 3;
console.log("varComplex : " + varComplex); //33.33333336

varComplex *= 3;
console.log("varComplex : " + varComplex); // 100