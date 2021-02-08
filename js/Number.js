var str = '13131.9090013';
// 字符串转数值类型
console.log(parseInt(str)); 		//13131
console.log(parseFloat(str)); 		//13131.9090013
console.log(typeof parseFloat(str));	//number
var a  = Number(str);
console.log(isNaN(a)); //NaN  //false
var  num = 1313.179;
// 强制类型转换
console.log(num.toString());	//1313.179
console.log(typeof num.toString());		//string
console.log(String(num));		//1313.179
// 隐式转换
console.log('' + num);			//1313.179
console.log(''.concat(num));	//1313.179
console.log(Number(num.toFixed(2))); 	//1313.18
