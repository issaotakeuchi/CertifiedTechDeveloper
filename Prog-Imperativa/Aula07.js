/* 
console.log(!true)
//1  false
console.log(!false)
//2 true
console.log(!!false)
//3 false
console.log(!!true)
//4 true
console.log(!1)
//5 false
console.log(!!1)
//6 true
console.log(!0)
//7 true
console.log(!!0)
//8 false
console.log(!!"")
//9 false
let x = 5 ;
let y = 9;
console.log(x < 10 && x!==5)
//10.a. false
console.log(x>9 || x===5)
//10.b. true
console.log(!(x===y))
//10.c. true
*/

/*
let x=10
let y ="a"
console.log(y==="b" || x >= 10)
//true
*/
/*
let x=3
let y=8
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y))
//false 
*/

/*
let str = ""
let msg = "haha!"
let eBonito = "false"
console.log(!((str || msg) && eBonito))
//false
*/