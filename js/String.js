// 字符串String
// 属性
	// length
// 方法
/*
	charAt() 获取指定的编码对应的字符
	charCodeAt() 获取指定的字符对应的编码
	concat() 字符串拼接 不改变原字符串
	slice() 切片 不改变原字符串
	substring() 切片 不改变原字符串
	substr() 切片 不改变原字符串
	
	indexOf() 从左往右查询元素第一次出现的位置，返回值为找到的索引位置
	lastIndexOf() 从右向左查询元素第一次出现的位置，返回值为找到的索引位置
	trim() 清除当前字符串的前后后格 不改变原字符串
	
	//常用
	toLowerCase() 不改变原字符串
	toUpperCase() 不改变原字符串
	toLocaleLowerCase() 不改变原字符串
	toLocaleUpperCase() 不改变原字符串
*/
// length()
var str1='hello world';
console.log(str1);
console.log(str1.length); //11
// charAt() 获取指定位置的字符
console.log(str1.charAt(6)); //w
// charCodeAt() 获取指定位置的字符对应的编码
console.log(str1.charCodeAt(6)); //119
// concat() 字符串拼接 不改变原字符串
console.log(str1.concat('!','hello'));
console.log(str1);
// slice(起始位置，结束位置) 切片 不改变原字符串
console.log(str1.slice(1,4));
console.log(str1);
// substring(起始位置，结束位置) 切片 不改变原字符串
console.log(str1.substring(1,4));
console.log(str1);
// substr(起始位置，返回的字符个数) 切片 不改变原字符串
console.log(str1.substr(2,6));
console.log(str1);
// indexOf(元素，起始位置) 从左往右查询元素第一次出现的位置，返回值为找到的索引位置
// 查找时起始位置也在查找范围内
var str2 = 'hello hello hello hello';
console.log(str2.indexOf('e',6));
// lastIndexOf(元素，起始位置) 从右向左查询元素第一次出现的位置，返回值为找到的索引位置
// 查找时起始位置也在查找范围内
console.log(str2.lastIndexOf('e',10));
// trim() 清除当前字符串的前后后格 不改变原字符串
var str3 = '         hello     hello       ';
console.log(str3.trim());
console.log(str3);
var str4 = 'hello WORLD';
// toLowerCase() 不改变原字符串
console.log(str4.toLowerCase());
console.log(str4);
// toUpperCase() 不改变原字符串
console.log(str4.toUpperCase());
console.log(str4);
// toLocaleLowerCase() 不改变原字符串
console.log(str4.toLocaleLowerCase());
console.log(str4);
// toLocaleUpperCase() 不改变原字符串
console.log(str4.toLocaleUpperCase());
console.log(str4);
