// Math
// var a = 3;
// 方法  min() max()
var max = Math.max(3,34,56,21);
var min = Math.min(3,34,56,21);

var arr = [1,2,32,23,45,21];
var max = Math.max.apply(null,arr);
var min = Math.min.apply(null,arr);
// var max=  Math.max(arr[0],arr[1],arr[2]);
console.log(max);
console.log(min);

// ceil()  floor() round()
var num = 24.8;
console.log(Math.ceil(num)); //天花板函数 向上取整
console.log(Math.floor(num)); //地板函数 向下取整
console.log(Math.round(num)); //标准的四舍五入
// 随机数 random()     0 <= random<1
console.log(Math.random());