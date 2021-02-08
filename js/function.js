// 函数
function function_name(args1){
	alert("这是一个有参数的函数，参数为:"+args1);
}
// 调用函数
// function_name(10);
// 函数的返回值
function return_function(){
	return "这是一个无参有返回值的函数";
}
var return_value = return_function();
// alert(return_value);
// 匿名函数
(function(){
	alert("这是一个匿名函数！");
})();
// 函数表达式
var function_impressive = function(args1){
	alert("这是一个带参匿名函数，参数为："+args1);
};
function_impressive("邓荣鹏");
// 函数作用域：全局与局部