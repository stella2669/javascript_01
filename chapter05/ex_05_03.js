// indexOf() : 위치 , lastIndexOf : 뒤쪽부터 위치 검색
var varArrIndex = new Array(123, "ABC", "abc", "가나다", "123");
console.log("varArrIndex.indexof(\"가나다\") : " + varArrIndex.indexOf("가나다"));
console.log("varArrIndex.lastIndexOf(\"가나다\") : " + varArrIndex.lastIndexOf("가나다"));
console.log("varArrIndex.indexOf(123) : " + varArrIndex.indexOf(123));
console.log("varArrIndex.lastIndexOf(123) : " + varArrIndex.lastIndexOf(123));
console.log("varArrIndex.indexOf(\"XYZ\") : " + varArrIndex.indexOf("XYZ"));
// 찾는 데이터가 없을 시 -1 리턴*/


// concat() : 연결
var varArrFir = new Array("ABC", "DEF", "GHI", "JKL");
var varArrSec = new Array("가나다", "라마바", "사아자", "차카파");
var varArrRes = varArrFir.concat(varArrSec); 
/* 모두 객체기 때문에 .써야함 */

console.log("varArrFir : " + varArrFir);
console.log("varArrSec : " + varArrSec);
console.log("varArrRes : " + varArrRes);


// join("~") : 데이터와 데이터 사이에 "~"를 넣어 나열
var varArrJoin = new Array("AB", "CD", "EF", "HI");
console.log("varArrJoin : " + varArrJoin.join());
console.log("varArrJoin : " + varArrJoin.join("|"));
console.log("varArrJoin : " + varArrJoin.join(":"));
console.log("varArrtoString : " + varArrJoin.toString());


// 	sort() : 정렬
var varArrSort = new Array("E","B","A","C","D");
console.log("varArrSortBefore : " + varArrSort);
console.log("varArrSort : " + varArrSort.sort());
console.log("varArrSortAfter : " + varArrSort);


// reverse() : 정렬
var varArrReverse = new Array("E","B","A","C","D");
console.log("varArrReverse : " + varArrReverse);
console.log("varArrReverse.reverse() : " + varArrReverse.reverse());
console.log("varArrReverseAfter : " + varArrReverse);

// push() : 넣기
var varArrPush = new Array("ABC", "DEF");
console.log("varArrPush : " + varArrPush.push("가나다", "마바사"));
console.log("varArrPush : " + varArrPush);
console.log("varArrPush.length : " + varArrPush.length); // 4

// shift()_맨앞, pop()_맨뒤 : 데이터 뽑아내기
var varArrShiftPop = new Array("가","나","다","라","마");
console.log("varArrShiftPop.shift() : " + varArrShiftPop.shift());
console.log("varArrShiftPop : " + varArrShiftPop);
console.log("varArrShiftPop.length : " + varArrShiftPop.length);

console.log("varArrShiftPop.pop() : " + varArrShiftPop.pop());
console.log("varArrShiftPop : " + varArrShiftPop);
console.log("varArrShiftPop.length : " + varArrShiftPop.length);

varArrShiftPop.unshift("가"); //맨앞쪽에 붙이기
varArrShiftPop[varArrShiftPop.length] = "마"; //index 4위치에 "마" 넣기
varArrShiftPop[5] = "바"; /* index에 "바" 추가 */
console.log("varArrShftPopOri : " + varArrShiftPop); //가,나,다,라,마,바

/*
	push() : 배열의 맨 끝에 값을추가한다.
	pop() : 배열의 맨 끝에 값을 제거한다.
	unshift() : 배열의 맨 앞에 값을 추가한다.
	shift() :배열의 맨 앞에 값을 제거한다.
*/